---
title: Sharing Knowledge
sections:
  - elementId: ''
    showDate: true
    showAuthor: false
    showExcerpt: true
    showReadMoreLink: true
    readMoreLinkLabel: Read more
    variant: variant-b
    actions:
      - type: Link
        label: See all projects
        altText: See all projects
        url: /blog
        showIcon: true
        icon: arrowRight
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-10
          - pb-10
          - pl-10
          - pr-10
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
    title: Selected Projects
    subtitle: ''
    colors: colors-e
    recentCount: 3
    type: RecentPostsSection
  - type: ContactSection
    colors: colors-c
    title: Contact
    form:
      type: FormBlock
      elementId: sign-up-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: false
          width: 1/2
        - type: TextFormControl
          name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
        - type: TextFormControl
          name: message
          label: Your message
          hideLabel: true
          placeholder: Your message
          isRequired: true
          width: full
      submitLabel: Send
      styles:
        submitLabel:
          textAlign: center
    media: null
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-10
          - pb-10
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
layout: PageLayout
---
