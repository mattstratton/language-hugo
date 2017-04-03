'use babel';

import LanguageHugoView from './language-hugo-view';
import { CompositeDisposable } from 'atom';

export default {

  languageHugoView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.languageHugoView = new LanguageHugoView(state.languageHugoViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.languageHugoView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'language-hugo:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.languageHugoView.destroy();
  },

  serialize() {
    return {
      languageHugoViewState: this.languageHugoView.serialize()
    };
  },

  toggle() {
    console.log('LanguageHugo was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
