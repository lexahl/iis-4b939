---
layout: PostFeedLayout
title: Featured Projects
numOfPostsPerPage: 10
styles:
  title:
    textAlign: center
bottomSections:
  - elementId: ''
    showDate: true
    showAuthor: false
    showExcerpt: false
    showReadMoreLink: true
    readMoreLinkLabel: Join adventure
    variant: variant-d
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
    type: FeaturedPostsSection
  - elementId: ''
    colors: colors-c
    quote: >
      ### “Of all the teachings we receive this one is the most important:
      nothing belongs to you of what there is, of what you take, you must
      share.”
    name: Chief Dan George
    backgroundImage: null
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
          - pt-10
          - pb-10
          - pl-52
          - pr-52
        justifyContent: center
      quote:
        textAlign: center
      name:
        fontWeight: 500
        fontStyle: normal
        textAlign: center
      title:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
    type: QuoteSection
  - colors: colors-d
    elementId: ''
    images:
      - type: ImageBlock
        url: /images/IMG_0960.JPG
        altText: Image one
        caption: Image one caption
      - type: ImageBlock
        url: /images/IMG_0958.JPG
        altText: Image two
        caption: Image two caption
      - type: ImageBlock
        url: /images/IMG_0961-38d66076.JPG
        altText: Image three
        caption: Image three caption
      - type: ImageBlock
        url: /images/IMG_0959.JPG
        altText: Image four
        caption: Image four caption
    spacing: 16
    columns: 4
    aspectRatio: '4:3'
    showCaption: false
    enableHover: false
    styles:
      self:
        height: auto
        width: full
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-4
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
    type: MediaGallerySection
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
          - ml-0
          - mr-0
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
---
