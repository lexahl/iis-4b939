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
      <center>


      <img src="images/indigenous_innovation_logo_FINAL.svg" alt="logo"
      draggable="false" width="25%">


      </center>
  - elementId: ''
    colors: colors-c
    backgroundSize: full
    title: “My story is my brand."
    text: >
      Focuses on Indigenous and social innovation, entrepreneurial mentorship,
      and community determination that empowers Indigenous people to design
      their own future.
    actions:
      - type: Button
        label: Contact
        showIcon: true
        icon: arrowRight
        url: /contact
        style: primary
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
          - pt-5
          - pb-5
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
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        actions: []
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: Inspiring Action
        text: >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        actions: []
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: Collective Community Spirit
        text: >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor
        actions: []
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: Sharing Knowledge
        text: >-
          As a passionate artist and cultural advisor of the Ojibway nation, it
          has been a privilege and a great honour to share my gifts from the
          creator and mother earth.
        actions: []
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
          - pt-5
          - pb-5
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
  - colors: colors-c
    elementId: ''
    title: Key value propositions
    subtitle: ''
    items:
      - type: FeaturedItem
        title: >-
          On-Demand services and live learning opportunities covering a range of
          topics:
        text: |
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
            label: Learn more
            showIcon: true
            icon: arrowRight
            url: /
            style: primary
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: Smarter
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        actions:
          - type: Button
            label: Learn more
            showIcon: true
            icon: arrowRight
            url: /
            style: primary
        styles:
          self:
            textAlign: left
      - type: FeaturedItem
        title: Focused
        text: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
          lorem, tincidunt ac leo efficitur, feugiat tempor odio. Maecenas
          pharetra ipsum dolor, et iaculis elit ornare ac.
        actions:
          - type: Button
            label: Learn more
            showIcon: true
            icon: arrowRight
            url: /
            style: primary
        styles:
          self:
            textAlign: left
    actions: []
    columns: 1
    enableHover: false
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
          - pb-36
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
          - pt-5
          - pb-5
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
