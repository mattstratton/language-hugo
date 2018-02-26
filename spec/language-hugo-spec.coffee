describe "Hugo grammar", ->
  grammar = null

  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage("language-hugo")

    runs ->
      grammar = atom.grammars.grammarForScopeName("text.html.hugo")

  it "parses the grammar", ->
    expect(grammar).toBeTruthy()
    expect(grammar.scopeName).toBe "text.html.hugo"
