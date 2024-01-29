import { Template } from 'meteor/templating';

import './dashboard.html';

Template.dashboard.onCreated(function () {
  // Subscription code to fetch user-specific data
});

Template.dashboard.helpers({
  // Helper functions to retrieve and display user-specific data
});
