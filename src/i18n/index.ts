import i18n from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';
import {I18nManager} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const resources = {
  en: {
    translation: {
      // AUTH FLOW

      // SPLASH SCREEN
      select_language: 'Select Language',
      english: 'English',
      arabic: 'Arabic',
      continue: 'Continue',

      // OnboardingSCREEN1
      Onboarding_heading1: 'Welcome to OMC House',
      Onboarding_text1:
        'Simplifying your taxation through our App. Sign-up to be part of the most trusted Taxation Service provider in Pakistan!',

      // OnboardingSCREEN2
      Onboarding_heading2: 'Comprehensive Tax Management',
      Onboarding_text2:
        'Interact and earn rewards with our points program! Help classmates and earn points redeemable for cash or future course purchases. Start building your rewards now.',
      skip: 'Skip',
      next: 'Next',

      // SignUpScreen
      heading: 'Let’s you in',
      continue_with_google: 'Continue with Google',
      continue_with_mail: 'Continue with Mail',
      continue_with_mobile: 'Continue with Mobile',
      continue_with_email: 'Continue with email',
      signup_text: 'Dont have an account? Signup Now',
      signup: 'SignUp',
      login: 'Login',
      continue_with_guest: 'Continue as guest',
      full_name: 'Full Name',
      first_name: 'First Name',
      last_name: 'Last Name',
      enter_full_name: 'Enter your full name',
      enter_first_name: 'Enter your first name',
      enter_last_name: 'Enter your last name',
      nic_number: 'NIC Number',
      enter_nic_number: 'Enter your NIC number',
      enter_phone_number: 'Enter your phone number',
      confirm_password: 'Confirm Password',
      enter_confirm_password: 'Enter confirm password',
      // COMMON KEYS
      Lets_sign_in: 'Let’s sign in',
      Lets_sign_up: 'Let’s sign up',
      enter_your_phone_number: 'Enter your phone number',
      send_verification_code: 'Send verification code',
      enter_mail: 'Enter your email',
      skip_now: 'Skip now',

      enter_otp_code: 'Enter OTP code',
      otp_text:
        '6 digit code sent to your mobile. Please check and confirm the code to continue',
      didnt_get_otp: 'Didn’t get OPT?',
      resend: ' Resend',
      confirm: 'Confirm',

      congratulations: 'Congratulations',
      account_registered: 'Your account has been registered',
      go_to_courses: 'Go to courses',

      enter_your_email: 'Enter your email',
      password: 'Password',
      email: 'Email',
      enter_your_password: 'Enter your password',
      forgot_password: 'Forgot Password?',
      sign_in: 'Sign in',
      or: 'OR',
      sign_in_with: 'Sign in with',
      welcome: 'Welcome',
      name: 'Your name',
      your_name: 'Your name',
      your_email: 'Your email',
      terms_and_conditions:
        'By confirming, this will create your account. Review our terms and conditions',

      // HOMESCREEN
      find_course: 'Find a course that interests you',
      search_course: 'Search course',
      top_categories: 'Top Categories',
      promos_course: 'Promo’s Course',
      free_course: 'Free course promo for you',
      trending_course: 'Trending course',
      popular_course: 'Popular course',
      participants_view_also: 'Participants view also',
      home: 'Home',
      services: 'Services',
      search: 'Search',
      search_questions: 'Search Questions',
      all_courses: 'All Courses',
      blogs: 'Blogs',
      activity: 'Activity',
      live_sessions: 'Live Sessions',
      profile: 'Profile',
      create_service: 'Create Service',

      // SEARCHSCREEN
      course1: 'Digital marketing',
      course2: 'Language learning',
      course3: 'Designing',

      // COURSEDETAILS
      enroll: 'enroll',
      created_by: 'Created by',
      free: 'FREE',
      What_youll_learn: 'What you’ll learn',
      this_course_includes: 'This course includes',
      description: 'Description',
      curriculum: 'Curriculum',
      recommended_courses: 'Recommended courses',
      instructor: 'Instructor',
      student_feedback: 'Student Feedback',
      course_rating: 'course rating',
      read_more: 'Read more',
      prise: 'Price',
      register: 'Register',

      // BUY_COURSE
      checkout: 'Checkout',
      summary: 'Summary',
      original_price: 'Original Price',
      tax: 'tax',
      general_vat: 'General + vat',
      discounts: 'Discounts',
      total: 'Total :',
      payment_method: 'Payment Method',
      credit_card_details: 'Credit Card Details',
      continue_payment: 'Continue payment',

      // PURCHASESUCCESS
      purchase: 'Purchase has been done successfully',

      // COURSESSCREEN
      my_courses: 'My Courses',
      ongoing: 'Ongoing',
      completed: 'Completed',
      course_title: 'Understand what Design Thinking is all about',
      course_description: 'All can be perfect in math',

      // CHATSCREEN
      course_detail: 'Course Detail',
      lectures: 'Lectures',
      chat: 'Chat',
      Quiz_Assigments: 'Quiz/Assigments',
      more_details: 'More details',
      add_message: 'Add message',
      promote_this_user: 'Promote this user',
      desc: 'Read the document and rewrite it own wordings',
      rewards_now: 'Rewards now',
      congrats: 'Congrats',
      bonus_point: 'Your got 1 bonus point',
      ok: 'Ok',
      user_promoted: 'You Promoted this user',

      // Profile screen
      points_progress: 'Points Progress',
      rewards_points: 'Rewards points',
      point_and_amount: 'Point and amount',
      transactions_history: 'Transactions history',
      my_notifications: 'My notifications',
      my_favorite_courses: 'My favorite courses',
      exchange: 'Exchange',
      my_wallet: 'My wallet',
      support_agent: 'Support Agent',
      my_account: 'My account',
      setting: 'Setting',
      Logout: 'Logout',

      // SupportAgent
      feedback: 'Ask us anything, or share feedback',
      how_can_we_help_you: 'How can we help you?',
      my_courses_not_showing: 'My courses not showing',
      i_have_a_question: 'I have a question',
      i_need_help_regarding_my_payment: 'I need help regarding my payment',
      i_have_a_suggestion: 'I have a suggestion',
      start_conversation: 'Start conversation',
      subject: 'Subject',
      enter_objective: 'Enter objective',
      message: 'Message',
      message_here: 'Message here',
      save: 'Save',
      add_comment: 'Add comment',

      // MYACCOUNT
      personal_details: 'Personal details',
      Name: 'Name',
      your_phone_number: 'Your phone number',
      age: 'Age',
      select_gender: 'Select gender',
      select: 'Select',
      profession: 'Profession',
      update: 'Update',

      // MENUSCREEN
      about_us: 'About us',
      points: 'Best Points Programs Members',
      invitation: 'Invitation',
      invitation_rewards: 'Invitation rewards',
      common_question: 'Common questions',
      terms_conditions: 'Terms & conditions',
      privacy_policy: 'Privacy Policy',
      help_center: 'Help center',
      invite_friends: 'Invite friends',
      points_program: 'Points Program',
      log_out: 'Logout',

      about_us_desc:
        'In this course we will study the initial stages of becoming a UI/UX Designer, I have several steps that I often do when I want to make a Website Design or App Design In this course we will study the initial stages of becoming a UI/UX Designer, I have several steps that I often do when I want to make a Website Design or App Design In this course we will study the initial stages of becoming a UI/UX Designer, I have several steps that I often do when I want to make a Website Design or App Design In this course we will study the initial stages of becoming a UI/UX Designer, I have several steps that I often do when I want to make a Website Design or App Design ',
      privacy_policy_desc:
        'In this course we will study the initial stages of becoming a UI/UX Designer, I have several steps that I often do when I want to make a Website Design or App Design In this course we will study the initial stages of becoming a UI/UX Designer, I have several steps that I often do when I want to make a Website Design or App Design In this course we will study the initial stages of becoming a UI/UX Designer, I have several steps that I often do when I want to make a Website Design or App Design In this course we will study the initial stages of becoming a UI/UX Designer, I have several steps that I often do when I want to make a Website Design or App Design',
      terms_conditions_desc:
        'In this course we will study the initial stages of becoming a UI/UX Designer, I have several steps that I often do when I want to make a Website Design or App Design In this course we will study the initial stages of becoming a UI/UX Designer, I have several steps that I often do when I want to make a Website Design or App Design In this course we will study the initial stages of becoming a UI/UX Designer, I have several steps that I often do when I want to make a Website Design or App Design In this course we will study the initial stages of becoming a UI/UX Designer, I have several steps that I often do when I want to make a Website Design or App Design',

      // Points_Program
      points_program_desc:
        'It is a program that gives the student several points when registering for any course, the value of each point is 5 Saudi riyals. The student can exchange these points by purchasing another course within the academy, or exchange them for a sum of money after exceeding 5000 riyals or 1000 points.',
      question_one: 'How do you get points?',
      ans_one:
        'When you buy a course, you will get a set of points, which you can use as you like. Or when you help another student participating in the same course through interactive classes, the other student can give you one point equal to 5 riyals, and several students can give you these points.',
      question_two: 'How do I get points from another student?',
      ans_two:
        'Through interactive classes, you can offer a point to another student when he helps you explain a specific piece of information, and this point will be deducted from your balance. Each course is linked to an interactive class in which students participate.',
      points_balance: 'Points balance',
      points_balance_desc:
        'Each student has a balance of points, when he participates in any course that gives several points, and the student can increase his points by helping others, also other students can deduct points from him.',
      question_three: 'How do I exchange points for money?',
      ans_three:
        'After your points balance exceeds 1,000 points or 5,000 riyals, you can contact technical support to transfer this amount to your bank account.',
      question_four: 'The purpose of the points program?',
      ans_four:
        'Creating an interactive educational platform to encourage students to help each other on course topics. important note: The points program is an addition to the course. It is not obligatory for Nomu Academy to give students discounts or money. This decision will continue during the trial period. The points program is subject to the terms and conditions, which are updated periodically, please read them.',

      // COMMONQUESTION
      common_question_one: 'What type of courses does Nomou Academy offer?',
      common_ans_one:
        'Courses in the Saudi, American and global stock markets, investment funds and indices, REIT funds - crowdfunding with debt and equity, sukuk, options, digital currencie',

      // INVITESCREEN
      invite_your_friends: 'Invite your friends',
      invite_desc:
        'Refer your friends & earn up to 25% successfully message congration dummy text very benefits on your activity',
      invite_rewards: 'Your invitation gets rewards',
      invite_rewards_desc:
        'Refer your friends & earn up to 25% successfully message congration dummy text very benefits on your activity',
      invite_link: 'Invite Link',
      my_invited_rewards: 'My Invited rewards',

      // INVITEPOINTSCREEN
      total_points: 'Total points',
      total_invited: 'Total invited',
      invited_users_rewards: 'Invited users rewards',

      // PRIVACYSCREEN
      two_step_verification: '2 step verification',
      step_1: 'If we need to confirm it’s you, which should we try first?',
      phone_number: 'Phone Number',
      email_address: 'Email Address',
      step_2: 'When should we confirm?',
      term_1: 'When my login or activity seems risky',
      term_2: 'At every login and when my login or activity seems risky',

      // TRANSACTIONHISTORY
      filter: 'Filter',
      all: 'All',
      received_rewards: 'Received rewards',
      sended_rewards: 'Sended rewards',
      apply: 'Apply',
      received_points: 'Received points',
      date: 'Date',
      status: 'Status',
      amount: 'Amount',
      transaction_id: 'Transaction ID',
      transaction_description: 'Transaction Description',
      user_information: 'User Information',
      billing_address: 'Billing Address',
      get_invoice: 'Get invoice',

      // LOGOUT
      logout_desc: 'Are you sure you want to logout',
      cancel: 'Cancel',
      yes_logout: 'Yes, logout',

      // SETTINGSCREEN
      dark_mode: 'Dark Mode',
      language: 'Language',
      mute_notification: 'Mute Notification',
      sound: 'Sound',
      privacy: 'Privacy',
      help: 'Help',

      // NOTIFICATION
      notifications: 'Notifications',
      course_update: 'Course update',
      view_all: 'View All',
      assignment_reminders: 'Assignment Reminders',
      event_notifications: 'Event Notifications',
      account_Notifications: 'Account Notifications',
      system_updates: 'System Updates',
      feedback_and_surveys: 'Feedback and Surveys',
      chat_engagement: 'Chat Engagement',
      progress_update: 'Progress Update',
      account_security: 'Account Security',
      billing: 'Billing',

      // Exchange screen
      exchange_screen: 'Exchange screen',
      get_exchange: 'Get exchange',
      select_exchange_way: 'Select Exchange Way',
      exchange_with_money: 'Exchange with money',
      exchange_with_courses: 'Exchange with courses',
      claim_now: 'Claim now',
      reward_courses: 'Reward courses',
      buy_course: 'Buy Course',
      point_amount: 'Point & amount',
      total_spend: 'Total spend',
      points_spending_details: 'Points spending details',
      courses_available: 'Courses available',
      my_balance: 'My Balance',
      buy_now: 'Buy Now',
      withdraw: 'Withdraw',
      transaction_details: 'Transaction details',
      money_withdraw: 'Money withdraw',
      please_verify: 'Please Verify',
      enter_amount: 'Enter Amount',
      withdrawal_amount: 'Withdrawal Amount',
      Fees: 'Fees',
      you_will_receive: 'You will receive',
      withdraw_desc:
        'Payment processing fees are charged by electronic payment gateways such as PayPal and credit cards.',
      confirm_withdrawal: 'Confirm Withdrawal',
      are_your_sure: 'Are your sure ?',
      withdrawal_proceed: 'Withdrawal will be proceed',
    },
  },
  ar: {
    translation: {
      // AUTH FLOW

      // SPLASH SCREEN
      select_language: 'اختار اللغة',
      english: 'إنجليزي',
      arabic: 'عربي',
      continue: 'يكمل',

      // OnboardingSCREEN1
      Onboarding_heading1: 'اختار اللغةاختار اللغة',
      Onboarding_text1: 'اختار اللغةاختار اللغةاختار اللغة',

      // OnboardingSCREEN2
      Onboarding_heading2: 'اختار اللغةاختار اللغة',
      Onboarding_text2: 'اختار اللغة',
      skip: 'اختار ',
      next: 'اختار ',

      // SignUpScreen
      heading: 'اختار اللغة',
      continue_with_google: 'اختار اللغة',
      continue_with_mail: 'اختار اللغة',
      continue_with_mobile: 'اختار اللغة',

      // COMMON KEYS
      Lets_sign_in: 'اختار اللغة',
      enter_your_phone_number: 'اختار اللغةاختار اللغة',
      send_verification_code: 'اختار اللغةاختار اللغة',
      skip_now: 'اختار اللغة',

      enter_otp_code: 'اختار اللغة',
      otp_text: 'اختار اللغةاختار اللغةاختار اللغةاختار اللغةاختار اللغة',
      didnt_get_otp: 'اختار اللغةاختار اللغة',
      _resend: 'اختار اللغةاختار اللغة',
      confirm: 'اللغةاختار',
      header_text: ' \nاللغةاختار اللغة',
      congratulations: 'اختار اللغة',
      account_registered: 'اختار اللغةd',
      go_to_courses: 'اختار اللغة',
      login: 'اختار',
      conversation_champion: 'اللغةاختار اللغة',

      continue_with_email: 'اللغةاختار اللغة',
      email: 'اختار اللغة',
      enter_your_email: 'اختار اللغة',
      password: 'اختار اللغة',
      enter_your_password: 'اختار اللغة',
      forgot_password: 'اختار اللغة?',
      sign_in: 'اختار اللغة',
      or: 'اختار',
      sign_in_with: 'اختار اللغة',
      welcome: 'اختار اللغة',
      name: 'اختار اللغة',
      your_name: 'اختار اللغة',
      enter_name: 'اختار اللغة',
      your_email: 'اختار اللغة',
      enter_mail: 'اختار اللغة',
      terms: 'اختار اللغة',
      and: 'اللغة',
      conditions: 'اختار اللغةاختار اللغة',
      text: 'اختار اللغةاختار اللغةاختار اللغةاختار اللغة',

      // HOMESCREEN
      find_course: 'اللغةاختار اللغةاختار اللغة',
      search_course: 'اللغةاختار اللغة',
      top_categories: 'اللغةاختار اللغة',
      promos_course: 'اللغةاختار اللغة',
      free_course: 'اللغةاختار اللغة',
      trending_course: 'اللغةاختار اللغة',
      popular_course: 'اللغةاختار اللغة',
      participants_view_also: 'اللغةاختار اللغة',
      home: 'اللغة',
      search: ' اللغة',
      all_courses: 'اللغة',
      activity: 'اللغة',
      profile: 'اللغة',

      // SEARCHSCREEN
      course1: 'اللغةاختار اللغة',
      course2: 'اللغةاختار اللغة',
      course3: 'اللغةاختار اللغة',

      // COURSEDETAILS
      enroll: 'اللغةاختار',
      created_by: ' اللغةاختا',
      free: 'اللغة',
      What_youll_learn: 'اللغةاختار اللغة',
      this_course_includes: 'اللغةاختار اللغة',
      description: 'اللغةاختار اللغة',
      curriculum: 'اللغةاختار اللغة',
      recommended_courses: 'اللغةاختار اللغة',
      instructor: 'اللغةاختار اللغة',
      student_feedback: ' اللغةاختار اللغة',
      course_rating: ' اللغةاختار اللغة',
      read_more: ' اللغةاختار اللغة',
      prise: 'اللغةاختار اللغة',
      register: 'اللغةاختار اللغة',

      // BUY_COURSE
      checkout: 'اللغةاختار اللغة',
      summary: 'اللغةاختار اللغة',
      original_price: ' اللغةاختار اللغة',
      tax: 'اللغة',
      general_vat: ' اللغةاختار اللغة',
      discounts: 'اللغةاختار ',
      total: ' اللغة',
      payment_method: ' اللغةاختار اللغة',
      credit_card_details: 'اللغةاختار اللغة',
      continue_payment: 'اللغةاختار اللغة',

      // PURCHASESUCCESS
      purchase: 'اللغةاختار اللغةاللغةاختار اللغة',

      // COURSESSCREEN
      my_courses: 'اللغةاختار',
      ongoing: 'اللغةاختار',
      completed: 'اللغةاختار',

      // CHATSCREEN
      course_detail: 'اللغةاختار ',
      lectures: 'اللغة',
      chat: 'اللغة',
      Quiz_Assigments: 'اللغةاختار اللغة',
      more_details: 'اللغةاختار اللغة ',
      add_message: 'اللغةاختار اللغة ',
      promote_this_user: 'اللغةاختار اللغة',
      desc: 'اللغةاختار اللغة',
      rewards_now: 'اللغةاختار اللغة',
      congrats: 'اللغةاختار',
      bonus_point: 'اللغةاختار اللغة',
      ok: 'اللغ',
      user_promoted: 'اللغةاختار اللغة',

      // Profile screen
      points_progress: 'اللغةاختار اللغة',
      rewards_points: 'اللغةاختار اللغة',
      point_and_amount: 'اللغةاختار اللغة',
      transactions_history: 'اللغةاختار اللغة',
      my_notifications: 'اللغةاختار اللغة',
      my_favorite_courses: 'اللغةاختار اللغة',
      exchange: 'اللغةاختار ',
      my_wallet: 'اللغةاختار اللغة',
      support_agent: 'اللغةاختار اللغة',
      my_account: 'اللغةاختار',
      setting: 'اللغةاختار ',
      Logout: 'اللغةاختار ',

      // SupportAgent
      feedback: 'اللغةاختار اللغة',
      how_can_we_help_you: 'اللغةاختار اللغة',
      my_courses_not_showing: 'اللغةاختار اللغة',
      i_have_a_question: 'اللغةاختار اللغة',
      i_need_help_regarding_my_payment: 'اللغةاختار اللغةاللغةاختار t',
      i_have_a_suggestion: 'اللغةاختار اللغة',
      start_conversation: 'اللغةاختار اللغة',
      subject: 'اللغة',
      enter_objective: 'اللغةاختار ',
      message: 'اللغة',
      message_here: 'اللغةاختار ',
      save: 'اللغة',
      add_comment: 'اللغةاختار',

      // MYACCOUNT
      personal_details: 'اللغةاختار',
      Name: 'اللغة',
      your_phone_number: 'اللغةاختار اللغة',
      age: 'اللغة',
      select_gender: 'اللغةاختار اللغة',
      select: 'اللغةاختار اللغة',
      profession: 'اللغةاختار ',
      update: 'اللغة',

      // MENUSCREEN
      about_us: 'اللغةاختار',
      points: 'اللغةاختار اللغة',
      invitation: 'اللغةاختار',
      invitation_rewards: 'اللغةاختار اللغة',
      common_question: 'اللغةاختار اللغة',
      terms_conditions: 'اللغةاختار اللغة',
      privacy_policy: 'اللغةاختار ',
      help_center: 'اللغةاختار اللغة',
      invite_friends: 'اللغةاختار اللغة',
      points_program: 'اللغةاختار اللغة',
      log_out: 'اللغةاختار ',

      about_us_desc:
        'اللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغة',
      privacy_policy_desc:
        'اللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغة',
      terms_conditions_desc:
        'اللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغة',

      // Points_Program
      points_program_desc:
        'اللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغة',
      question_one: 'اللغةاختار اللغة?',
      ans_one:
        'اللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغة',
      question_two: 'اللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغة?',
      ans_two:
        'اللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغة',
      points_balance: 'اللغةاختار اللغةاللغةاختار اللغةاللغة',
      points_balance_desc:
        'اللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغة',
      question_three: 'اللغةاختار اللغةاللغةاختار اللغة?',
      ans_three:
        'اللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغة',
      question_four:
        'اللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغة?',
      ans_four:
        'اللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغة',

      // COMMONQUESTION
      common_question_one: 'اللغةاختار اللغة?',
      common_ans_one: 'اللغةاختار اللغة',
      // INVITESCREEN
      invite_your_friends: 'اللغةاختار اللغة',
      invite_desc:
        'اللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغة',
      invite_rewards: 'اللغةاختار اللغة',
      invite_rewards_desc:
        'اللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغة',
      invite_link: 'اللغةاختار اللغة',
      my_invited_rewards: 'اللغةاختار اللغة',

      // INVITEPOINTSCREEN
      total_points: 'اللغةاختار اللغة',
      total_invited: 'اللغةاختار اللغة',
      invited_users_rewards: 'اللغةاختار اللغةاللغةاختار اللغة',

      // PRIVACYSCREEN
      two_step_verification: '2 اللغةاختار اللغة',
      step_1: 'اللغةاختار اللغةاللغةاختار اللغة?',
      phone_number: 'اللغةاختار اللغة',
      email_address: 'اللغةاختار اللغة',
      step_2: 'اللغةاختار اللغة?',
      term_1: 'اللغةاختار اللغةاللغةاختار اللغة',
      term_2: 'اللغةاختار ',

      // TRANSACTIONHISTORY
      filter: 'اللغة',
      all: 'اللغة',
      received_rewards: ' اللغةاختار اللغة',
      sended_rewards: 'اللغةاختار اللغة',
      apply: 'اللغة',
      received_points: 'اللغةاختار اللغة',
      date: 'اللغة',
      status: 'اللغة',
      amount: 'اللغة',
      transaction_id: 'اللغةاختار اللغة',
      transaction_description: 'اللغةاختار اللغة',
      user_information: 'اللغةاختار اللغة',
      billing_address: 'اللغةاختار اللغة',
      get_invoice: 'اللغةاختار اللغة',

      // LOGOUT
      logout_desc: 'اللغةاختار اللغة',
      cancel: 'اللغة',
      yes_logout: 'اللغةاختار اللغة',

      // SETTINGSCREEN
      dark_mode: 'اللغةاختار اللغة',
      language: 'اللغةاختار ',
      mute_notification: 'اللغةاختار اللغة',
      sound: 'اللغة',
      privacy: 'اللغةاختار ',
      help: 'اللغةاختار ',

      // NOTIFICATION
      notifications: 'اللغةاختار اللغة',
      course_update: 'اللغةاختار اللغة',
      view_all: 'اللغةاختار اللغة',
      assignment_reminders: 'اللغةاختار اللغة',
      event_notifications: 'اللغةاختار اللغة',
      account_Notifications: 'اللغةاختار اللغة',
      system_updates: 'اللغةاختار اللغة',
      feedback_and_surveys: 'اللغةاختار',
      chat_engagement: 'اللغةاختار',
      progress_update: 'اللغةاختار',
      account_security: 'اللغةاختار',
      billing: 'اللغةاختار ',

      // Exchange screen
      exchange_screen: 'اللغةاختار اللغة',
      get_exchange: 'اللغةاختار اللغة',
      select_exchange_way: 'اللغةاختار اللغة',
      exchange_with_money: 'اللغةاختار اللغة',
      exchange_with_courses: 'اللغةاختار اللغة',
      claim_now: 'اللغةاختار اللغة',
      reward_courses: 'اللغةاختار اللغة',
      buy_course: 'اللغةاختار اللغة',
      point_amount: 'اللغةاختار اللغة',
      total_spend: 'اللغةاختار اللغة',
      points_spending_details: 'اللغةاختار اللغةاللغة',
      courses_available: 'اللغةاختار اللغةاللغةاختار ',
      my_balance: 'اللغة اختار ',
      buy_now: 'اللغةاختار ',
      withdraw: 'اللغةاختار ',
      transaction_details: 'اللغةاختار اللغة',
      money_withdraw: 'اللغةاختار ',
      please_verify: 'اللغةاختار',
      enter_amount: 'اللغةاختار ',
      withdrawal_amount: 'اللغةاختار اللغة',
      Fees: 'اللغة',
      you_will_receive: 'اللغةاختار اللغة',
      withdraw_desc: 'اللغةاختار اللغةاللغةاختار اللغةاللغةاختار اللغة',
      confirm_withdrawal: 'اللغةاختار اللغة',
      are_your_sure: 'اللغةاختار اللغة?',
      withdrawal_proceed: 'اللغةاختار اللغة',
    },
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: I18nManager.isRTL ? 'ar' : 'en',

  interpolation: {
    escapeValue: true,
  },
});

const changeLan = async () => {
  const language = await AsyncStorage.getItem('lan');
  if (language != null) {
    i18n.changeLanguage('ar').then(() => {
      console.log('confiiiil;aggg', i18n);
    });
  }
};

changeLan();
