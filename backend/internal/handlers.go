package internal

import (
	"fmt"
	"html/template"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Handlers struct{ store Store }

func NewHandlers(s Store) *Handlers { return &Handlers{store: s} }

func (h *Handlers) Home(c *gin.Context) {
	p, err := h.store.GetProfile()
	if err != nil {
		c.String(http.StatusInternalServerError, err.Error())
		return
	}

	const tpl = `<!doctype html>
<html><head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>{{.Name}} — {{.Title}}</title>
<style>
body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu; margin:40px; line-height:1.5}
.wrap{max-width:760px}
h1{margin:0 0 8px}
.muted{color:#666}
.tags span{display:inline-block; padding:4px 10px; border:1px solid #ddd; border-radius:999px; margin:4px 6px 0 0; font-size:14px}
a{color:inherit}
</style>
</head><body>
<div class="wrap">
  <h1>{{.Name}}</h1>
  <div class="muted">{{.Title}} · {{.Location}}</div>
  <p>{{.Summary}}</p>
  <p>
    {{if .Links.GitHub}}<a href="{{.Links.GitHub}}">GitHub</a>{{end}}
    {{if .Links.LinkedIn}} · <a href="{{.Links.LinkedIn}}">LinkedIn</a>{{end}}
    {{if .Links.Website}} · <a href="{{.Links.Website}}">Website</a>{{end}}
  </p>
  {{if .TechFocus}}<div class="tags">{{range .TechFocus}}<span>{{.}}</span>{{end}}</div>{{end}}
</div>
</body></html>`

	t := template.Must(template.New("home").Parse(tpl))
	c.Status(http.StatusOK)
	c.Header("Content-Type", "text/html; charset=utf-8")
	if err := t.Execute(c.Writer, p); err != nil {
		c.String(http.StatusInternalServerError, fmt.Sprintf("template error: %v", err))
	}
}

func (h *Handlers) Healthz(c *gin.Context) {
	if err := h.store.Ping(); err != nil {
		c.String(http.StatusServiceUnavailable, "unhealthy")
		return
	}
	c.String(http.StatusOK, "healthy")
}
