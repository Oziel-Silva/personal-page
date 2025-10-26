package internal

import (
	"errors"
	"os"

	"gopkg.in/yaml.v3"
)

type Store interface {
	GetProfile() (Profile, error)
	Ping() error
}

type yamlStore struct {
	path string
	data struct {
		Profile Profile `yaml:"profile"`
	}
}

func NewYAMLStore(path string) (Store, error) {
	s := &yamlStore{path: path}
	if err := s.reload(); err != nil {
		return nil, err
	}
	return s, nil
}

func (s *yamlStore) reload() error {
	b, err := os.ReadFile(s.path)
	if err != nil {
		return err
	}
	var tmp struct {
		Profile Profile `yaml:"profile"`
	}
	if err := yaml.Unmarshal(b, &tmp); err != nil {
		return err
	}
	if tmp.Profile.Name == "" {
		return errors.New("profile.name is empty in yaml file")
	}
	s.data = tmp
	return nil
}

func (s *yamlStore) GetProfile() (Profile, error) { return s.data.Profile, nil }

func (s *yamlStore) Ping() error { return nil }
