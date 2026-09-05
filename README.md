# Code Solutions

## Up and Running
* Inside the directory run `bundle install`
* Host website locally by running `bundle exec jekyll s`

## GitHub Pages

In repository **Settings > Pages > Build and deployment**, set **Source** to **GitHub Actions**, not **Deploy from a branch**.

The existing `.github/workflows/deploy.yml` installs the locked gems, builds with `bundle exec jekyll build`, and deploys the generated `_site/` artifact. Keep that workflow rather than replacing its build step with `actions/jekyll-build-pages`.

The built-in Pages builder uses a different Jekyll environment and does not load `jekyll-multiple-languages-plugin`. A failed `pages build and deployment` run reporting `Unknown tag 't'` or `Unknown tag 'tf'` indicates that the built-in builder is being used. It can run alongside the successful custom workflow until the Pages source is changed.

## Planning Features

New features are planned with [OpenSpec](openspec/README.md). Active work lives in `openspec/changes/`; maintained requirements live in `openspec/specs/`.

Restart OpenCode after setup, then use `/opsx-propose <feature-name-or-description>` to prepare a plan. Review it before explicitly starting `/opsx-apply <feature-name>`. Complete and verify the work before `/opsx-archive <feature-name>`.
