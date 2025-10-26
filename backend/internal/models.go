package internal

type Links struct {
	LinkedIn string `yaml:"linkedin" json:"linkedin"`
	GitHub   string `yaml:"github" json:"github"`
	Website  string `yaml:"website" json:"website"`
}

type Profile struct {
	Name      string   `yaml:"name" json:"name"`
	Title     string   `yaml:"title" json:"title"`
	Location  string   `yaml:"location" json:"location"`
	Summary   string   `yaml:"summary" json:"summary"`
	Links     Links    `yaml:"links" json:"links"`
	TechFocus []string `yaml:"tech_focus" json:"tech_focus"`
}
