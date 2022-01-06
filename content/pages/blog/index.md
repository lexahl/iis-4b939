---
layout: PostFeedLayout
title: Projects
numOfPostsPerPage: 15
styles:
  title:
    textAlign: center
bottomSections:
  - type: ContactSection
    colors: colors-e
    title: Contact
    text: |
      optional text
    form:
      type: FormBlock
      elementId: sign-up-form
      destination: ''
      action: /.netlify/functions/submission_created
      fields:
        - name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: text
          label: Your message
          hideLabel: true
          placeholder: Your message
          isRequired: true
          width: full
          type: TextFormControl
      submitLabel: Send message
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-208
          - mr-208
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
    backgroundSize: full
topSections:
  - elementId: ''
    showDate: true
    showAuthor: false
    showExcerpt: true
    showReadMoreLink: true
    readMoreLinkLabel: Join adventure
    variant: variant-c
    actions:
      - type: Link
        label: See all adventures
        altText: See all adventures
        url: /blog
        showIcon: true
        icon: arrowRight
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
    title: Seasonal adventure
    subtitle: ''
    colors: colors-d
    posts:
      - content/pages/blog/post-three.md
      - content/pages/blog/post-two.md
      - content/pages/blog/post-one.md
      - content/pages/blog/blanket-exercise-facilitation.md
    type: FeaturedPostsSection
postFeed:
  elementId: ''
  showExcerpt: false
  showReadMoreLink: false
  readMoreLinkLabel: ''
  styles:
    self:
      height: auto
      width: wide
      margin:
        - mt-0
        - mb-0
        - ml-40
        - mr-40
      padding:
        - pt-12
        - pb-12
        - pl-4
        - pr-4
      justifyContent: center
      borderRadius: none
      borderWidth: 0
      borderStyle: none
      borderColor: border-dark
    title:
      textAlign: center
    subtitle:
      fontWeight: 400
      fontStyle: normal
      textAlign: center
    actions:
      justifyContent: center
  title: null
  subtitle: null
  showDate: true
  showAuthor: true
  variant: variant-a
  actions: []
  colors: colors-a
---
