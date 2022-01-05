---
title: Home
layout: PageLayout
sections:
  - elementId: ''
    colors: colors-c
    variant: variant-a
    subtitle: ''
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
          - pt-5
          - pb-5
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
    type: TextSection
    text: >
      <center draggable="false">


      ## Indigenous Innovative Solutions



      <img src="images/indigenous_innovation_logo_FINAL.svg" alt="logo"
      width="20%">



      </center>
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-d
    backgroundSize: full
    title: Indigenous Innovative Solutions Inc.
    subtitle: “My story is my brand."
    actions:
      - type: Button
        label: Contact
        url: /
        style: primary
        iconPosition: right
        icon: arrowRight
        showIcon: true
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
        padding:
          - pt-52
          - pb-20
          - pr-24
          - pl-24
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    text: >
      Focuses on Indigenous and social innovation, entrepreneurial mentorship,
      and community determination that empowers Indigenous people to design
      their own future.
    backgroundImage:
      url: /images/banner1.png
      backgroundSize: cover
      backgroundPosition: center
      opacity: 60
  - colors: colors-d
    elementId: ''
    images:
      - type: ImageBlock
        url: /images/IMG_0960-2ff9138b.JPG
        altText: Image one
        caption: Image one caption
      - type: ImageBlock
        url: /images/IMG_0961-48522e09.JPG
        altText: Image two
        caption: Image two caption
      - type: ImageBlock
        url: /images/IMG_0958-a8f02115.JPG
        altText: Image three
        caption: Image three caption
      - type: ImageBlock
        url: /images/IMG_0959-04d59bff.JPG
        altText: Image four
        caption: Image four caption
    spacing: 16
    columns: 4
    aspectRatio: '4:3'
    showCaption: false
    enableHover: true
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
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
    type: MediaGallerySection
  - elementId: ''
    colors: colors-c
    variant: variant-a
    title: Seasonal adventures
    actions:
      - type: Link
        label: See all adventures
        url: /blog
        showIcon: true
        icon: arrowRight
    posts:
      - content/pages/blog/post-five.md
      - content/pages/blog/post-four.md
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
          - pt-28
          - pb-48
          - pl-4
          - pr-4
        justifyContent: center
        borderRadius: none
        borderWidth: 0
        borderStyle: none
        borderColor: border-dark
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: FeaturedPostsSection
    showDate: true
    showExcerpt: true
    showReadMoreLink: true
    readMoreLinkLabel: Join adventure
  - type: FeatureHighlightSection
    colors: colors-d
    backgroundSize: full
    title: Time to leave your desk. Let’s go flying
    text: |
      We’re local, seasonal fisherman, supporting fishing restrictions.
    actions:
      - type: Link
        label: Join adventure
        url: 'https://www.stackbit.com/'
        showIcon: true
        icon: arrowRight
    backgroundImage:
      type: BackgroundImage
      url: /images/20210722_181004.jpg
      backgroundSize: cover
      backgroundPosition: center
      opacity: 90
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
          - pt-36
          - pb-72
          - pr-4
          - pl-4
        justifyContent: flex-start
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: ContactSection
    colors: colors-d
    title: Contact
    text: |
      optional text
    form:
      type: FormBlock
      elementId: contact-form
      destination: lexi.ahluwalia@gmail.com
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
        - name: Message
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
---
