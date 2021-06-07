# language-hugo package

Adds syntax highlighting to [Hugo](http://gohugo.io/) files in Atom.

Contributions are greatly appreciated. Please fork this repository and open a pull request to add snippets, make grammar tweaks, etc.
## Publishing a release

After all changes have been merged to master, update the `package.json` file with the correct version and create a git tag with the same version number (for example, `package.json` will have version `0.5.11` and the tag should be `v0.5.11`).

When this tag with this `package.json` commit is pushed to main, GitHub Actions will create the release and publish to Atom.
### Pull Requests

All pull requests should be labeled with either "feature", "enhancement", "fix", "bug", or "chore". This label is used by the changelog generator.
