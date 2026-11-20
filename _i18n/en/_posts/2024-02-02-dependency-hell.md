---
title: Dependency hell
layout: post
lang: en
post-image: "/assets/images/2024-02-02-dependency-hell.png"
description:
author: Frederick Gaens
tags:
- GitHub Actions
- Dependabot
- Evergreen
---

Keeping dependencies up to date is one of the more important routines in software development. Updates patch vulnerabilities, improve performance and give access to new features, and they keep your code compatible with the libraries around it.

Doing this by hand across many repositories is another matter. Tracking new versions, checking compatibility and applying updates takes time, and the effort grows with every repository you add. This post shows how to automate most of that work with two tools: Dependabot and Evergreen.

## Meet Dependabot

Dependabot is not new, but it remains a reliable way to keep a project's dependencies current. To enable it for a repository, add a file named `.github/dependabot.yml`.

```yaml
---
version: 2
updates:
  - package-ecosystem: 'github-actions'
    directory: '/'
    schedule:
        interval: 'weekly'
```

With this configuration Dependabot checks for outdated dependencies every week and opens a pull request to update them to the latest version.

## Taking it one step further

Adding that file to every repository in a large organisation is tedious, and it is easy to miss one. Evergreen, a GitHub Action, automates this step. It scans the repositories in your organisation, identifies those without a Dependabot configuration and opens a pull request to add one, so that every repository gets the same automated updates.

To set up Evergreen, create an additional workflow file named `.github/workflows/evergreen.yml`.

```yaml
---
    name: Weekly dependabot checks
    on:
      workflow_dispatch:
      schedule:
        - cron: '2 1 * * *'
    
    permissions:
      issues: write
    
    jobs:
      evergreen:
        name: evergreen
        runs-on: ubuntu-latest
    
        steps:
          - name: Run evergreen action
            uses: github/evergreen@v1
            env:
              GH_TOKEN: {% raw %}${{ secrets.EVERGREEN_TOKEN }}{% endraw %}
              ORGANIZATION: fgaens
```

This workflow defines the schedule on which Evergreen runs. It requires a personal access token (PAT) to access and modify the repositories in your organisation.

## Adapting it to your needs

The configuration above is a minimal example. Both Dependabot and Evergreen offer many more options, from update schedules to the way individual dependencies are handled, so you can adapt them to your organisation.

## Demo and resources

A working example of this setup is available in our demo repository. The links below lead to the repository and the documentation.

### Links

- [Demo repository](https://github.com/fgaens/lab-evergreen-demo/actions)
- [Evergreen documentation](https://github.com/github/evergreen)
- [Dependabot documentation](https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)