import { AccountsTemplates } from 'meteor/useraccounts:core'
import { FlowRouter } from 'meteor/kadira:flow-router'
// AccountsTemplates.configure({
//   defaultLayout: 'appLayout',
//   defaultLayoutRegions: {},
//   defaultContentRegion: 'content',
// })
AccountsTemplates.configure({
  defaultLayout: 'appLayout',
  defaultLayoutRegions: {},
  defaultContentRegion: 'main',

  showForgotPasswordLink: true,
  overrideLoginErrors: true,
  enablePasswordChange: true,

  // sendVerificationEmail: true,
  // enforceEmailVerification: true,
  //confirmPassword: true,
  //continuousValidation: false,
  //displayFormLabels: true,
  //forbidClientAccountCreation: true,
  //formValidationFeedback: true,
  //homeRoutePath: '/',
  //showAddRemoveServices: false,
  //showPlaceholders: true,

  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: true,
  // onLogoutHook: () => {
  //   FlowRouter.go('/signin')
  // },
  // Privacy Policy and Terms of Use
  //privacyUrl: 'privacy',
  //termsUrl: 'terms-of-use',
})

AccountsTemplates.addField({
  _id: 'name',
  type: 'text',
  placeholder: {
    signUp: 'Your Fullname',
  },
  required: true,
})

Accounts.onLogin(() => {
  FlowRouter.go('/list/projects')
})

Accounts.onLogout(() => {
  window.location.href = '/'
})
