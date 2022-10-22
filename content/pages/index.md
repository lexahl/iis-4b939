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
          - pb-10
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
      <center>


      <img src="images/indigenous_innovation_logo_FINAL.svg" alt="logo"
      draggable="false" width="33%">


      </center>
  - elementId: ''
    colors: colors-c
    quote: |
      # Indigenous Innovative Solutions Inc.
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
          - pt-5
          - pb-5
          - pl-4
          - pr-4
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
  - elementId: ''
    colors: colors-b
    backgroundSize: full
    text: >-
      Focuses on Indigenous and social innovation, entrepreneurial mentorship,
      and community determination that empowers Indigenous people to design
      their own future.
    actions:
      - type: Button
        label: Contact
        showIcon: true
        icon: arrowRight
        url: /contact
        style: secondary
        altText: contact
    backgroundImage: null
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
        flexDirection: col
      title:
        textAlign: center
      text:
        textAlign: center
      actions:
        justifyContent: center
    type: CtaSection
  - colors: colors-c
    elementId: ''
    subtitle: ''
    items:
      - type: FeaturedItem
        title: Creating Solutions
        actions:
          - label: See professional profile
            altText: ''
            url: /professional-profile
            showIcon: true
            icon: arrowRight
            iconPosition: right
            elementId: ''
            type: Link
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: Inspiring  Action
        actions:
          - label: See past projects
            altText: ''
            url: /blog
            showIcon: true
            icon: arrowRight
            iconPosition: right
            elementId: ''
            type: Link
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: Collective Community Spirit
        actions: []
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: Sharing Knowledge
        actions:
          - label: See volunteer profile
            altText: Learn more
            url: /sharing-knowledge
            showIcon: true
            icon: arrowRight
            iconPosition: right
            elementId: ''
            type: Link
        styles:
          self:
            textAlign: left
    actions: []
    columns: 4
    enableHover: false
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
    type: FeaturedItemsSection
  - elementId: ''
    colors: colors-b
    backgroundSize: full
    title: 'Learning opportunities covering a range of topics:'
    text: |-
      *   Project Management
      *   Managing Energy Efficiency Projects
      *   Environmental Stewardship Consulting
      *   Employability Wise Practices
      *   Indigenous Awareness
      *   Human Skills Development Workshops
      *   Proposal Writing
      *   Indigenous Engagement Planning
      *   Business Development
      *   Advancing ESG and Indigenous Principles
      *   Custom workshops for employer-specific organizations
      *   As well as a range of resource management subjects
    actions:
      - type: Button
        label: Read full professional profile
        url: /professional-profile
        showIcon: true
        icon: arrowRight
        style: secondary
        altText: Read full professional profile
      - type: Link
        label: View past projects
        showIcon: true
        icon: arrowRight
        url: /projects
        altText: View past projects
    backgroundImage: null
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
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: CtaSection
  - type: ContactSection
    colors: colors-c
    title: Contact
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
          - pt-10
          - pb-10
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
