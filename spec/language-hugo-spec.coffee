describe "Hugo grammar", ->
  grammar = null

  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage("language-hugo")

    runs ->
      grammar = atom.grammars.grammarForScopeName("source.hugo")

  it "parses the grammar", ->
    expect(grammar).toBeTruthy()
    expect(grammar.scopeName).toBe "source.hugo"
