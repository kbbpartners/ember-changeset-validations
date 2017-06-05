import Ember from 'ember';
import _Messages from 'ember-validators/messages';

const {
  String: { dasherize, capitalize }
} = Ember;

const assign = Ember.assign || Ember.merge;
const Messages = assign({}, _Messages);

export default assign(Messages, {
  blank: '{description} must be blank',
  present: '{description} can\'t be blank',

  getDescriptionFor(key = '') {
    return capitalize(dasherize(key).split(/[_-]/g).join(' '));
  }
});
