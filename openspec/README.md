# Feature Workspace

Use OpenSpec to plan new features, review their requirements, and track implementation. Keep independent features in separate changes. Planning documents are English; public website copy remains bilingual.

## Where Things Live

- `changes/<feature-name>/`: active proposals, requirement deltas, design decisions, and implementation tasks.
- `specs/<capability>/spec.md`: the maintained requirements after changes are synced.
- `changes/archive/`: completed changes and their decision history.
- `config.yaml`: repository context and artifact rules.

The specs and changes directories start empty. Do not add placeholder requirements or mark existing features as newly implemented just to populate them.

## OpenCode Workflow

OpenSpec 1.11.0 generated the core commands and skills under `.opencode/`. Restart OpenCode after setup so it discovers them.

1. Optionally investigate an idea with `/opsx-explore`.
2. Propose a feature with `/opsx-propose <feature-name-or-description>`. This creates planning artifacts, not application changes.
3. Review the proposal, specs, design, and tasks. Use `/opsx-update <feature-name>` when the plan needs changes.
4. Validate the proposal with `openspec validate <feature-name> --strict --no-interactive`.
5. Explicitly start implementation with `/opsx-apply <feature-name>`.
6. After implementation and verification, use `/opsx-archive <feature-name>` and review the proposed sync into the maintained specs. `/opsx-sync <feature-name>` is also available separately.

For example, `/opsx-propose add-project-showcase-videos` starts a new plan; it does not render videos or modify the website.

## CLI

Install the setup version if the CLI is not available:

```bash
npm install -g @fission-ai/openspec@1.11.0
```

Useful commands from the repository root:

```bash
openspec list
openspec list --specs
openspec status --change <feature-name>
openspec validate --all --strict --no-interactive
```

The CLI alternative `openspec new change <feature-name>` only creates a scaffold; it does not write the proposal or requirements for you.

OpenSpec is authoring tooling, not a site build dependency. Both `openspec/` and `.opencode/` are excluded from Jekyll output. Keep the configuration, feature artifacts, and generated OpenCode integration versioned; do not run `openspec config` to change project rules, because that command edits global preferences.
