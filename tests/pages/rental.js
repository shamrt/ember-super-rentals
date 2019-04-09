import {
  create,
  text,
  visitable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/rentals/:show'),

  title: {scope: '[data-test-title]', text: text()},
  details: {scope: '[data-test-rental-details]', text: text()},
  description: {scope: '[data-test-rental-description]', text: text()},
});
