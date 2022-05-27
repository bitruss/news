Meson Network News

![](https://i.imgur.com/P5nvpud.png)

Jekyll Theme: [Lagrange](https://github.com/LeNPaul/Lagrange)

## Local Installation

For a full local installation of Meson Network News, download your own copy of Meson Network News and unzip it into it's own directory. From there, open up your favorite command line tool, enter `bundle install`, and then enter `bundle exec jekyll serve`. Your site should be up and running locally at [http://localhost:4000](http://localhost:4000).

```bash
git clone https://github.com/daqnext/meson-news.git
cd meson-news
bundle install
bundle exec jekyll serve
```

## Directory Structure

```bash
Lagrange/
├── _data                      # Data files
|  └── settings.yml            # Theme settings and custom text
├── _includes                  # Theme includes
├── _layouts                   # Theme layouts (see below for details)
├── _i18n                      # Where all your posts will go
├── assets                     # Style sheets and images are found here
|  ├── css                     # Style sheets go here
|  |  └── main.css             # Main CSS file
|  |  └── syntax.css           # Style sheet for code syntax highlighting
|  └── img                     # Images go here
├── menu                       # Menu pages
├── _config.yml                # Site build settings
├── Gemfile                    # Ruby Gemfile for managing Jekyll plugins
├── index.html                 # Home page
├── 404.html                   # 404 page
├── LICENSE.md                 # License for this theme
├── README.md                  # Includes all of the documentation for this theme
└── rss-feed.xml               # Generates RSS 2.0 file which Jekyll points to
```