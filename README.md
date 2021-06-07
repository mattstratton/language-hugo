# language-hugo package

Adds syntax highlighting to [Hugo](http://gohugo.io/) files in Atom.

Contributions are greatly appreciated. Please fork this repository and open a pull request to add snippets, make grammar tweaks, etc.
## Publishing a release

After all changes have been merged to master, run `npm version` with the appropriate version level (one of `patch`, `minor`, or `major`). This will bump the version in `package.json` and also create the appropriate git tag. Push this tag to `main` and it will kick off the release GitHub action, which will generate the GitHub Release and publish to the Atom registry.

### Pull Requests

All pull requests should be labeled with either "feature", "enhancement", "fix", "bug", or "chore". This label is used by the changelog generator.
