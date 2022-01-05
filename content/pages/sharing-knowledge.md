---
title: Sharing Knowledge
sections:
  - elementId: ''
    colors: colors-c
    quote: >
      ### “Of all the teachings we receive this one is the most important:
      nothing belongs to you of what there is, of what you take, you must
      share.”
    name: '- Chief Dan George'
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
        justifyContent: flex-start
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
    colors: colors-d
    variant: variant-b
    title: The Spirit of Sharing
    subtitle: Volunteer Profile of Winona Lafreniere
    text: >-
      As a passionate artist and cultural advisor of the Ojibway nation, it has
      been a privilege and a great honour to share my gifts from the creator and
      mother earth. I give thanks to those traditional teachers, elders and
      gifted individuals who offered their guidance and respect to passing on
      the Indigenous culture and wisdom. My respect and gratitude goes out to
      each individual for sharing their knowledge and experience with openness,
      rigor and vision, a vision that I am proud to pass on to others.


      To understand the reality of Indigenous art in practice today, history and
      context must be taken into consideration. Many artists consider
      contemporary art practices to be a process of re-appropriation, healing
      and reclaiming.


      The uniqueness of Indigenous art forms exists nowhere else in the world.
      This is partly due to the original expressions deriving from the land
      before contact. There is a profound connection between the land, the
      people, the language and the culture. The land knows how to take care of
      us.


      There are also cultural values employed that form Indigenous art practices
      and they include: respect, sharing, openness, humility and harmony. These
      values are inspired from traditional value systems such as the teepee
      teachings, the medicine wheel, the sweat lodge ceremony, to name a few.
      These are inter-generational teachings, stories and legends that are
      passed on through imagery and dance.


      Through community consultation and many years’ experience in building
      leadership skills, sharing of traditions and cultural teachings and
      personal empowerment, education has always been at the forefront. Working
      with various cultural groups and teaching at university level has provided
      me with the foundational skills and knowledge required to pursue my
      journey in sharing our stories and gifts.
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
          - pb-5
          - pl-52
          - pr-52
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
    type: TextSection
  - elementId: ''
    showDate: true
    showAuthor: false
    showExcerpt: true
    showReadMoreLink: true
    readMoreLinkLabel: Read more
    variant: variant-b
    actions:
      - type: Link
        label: See more projects
        altText: See more projects
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
          - pt-24
          - pb-24
          - pl-24
          - pr-24
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-start
    title: Projects
    subtitle: ''
    colors: colors-c
    recentCount: 15
    type: RecentPostsSection
  - type: ContactSection
    colors: colors-d
    title: Contact
    text: >-
      text
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
      submitLabel: Submit form
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
          - pt-24
          - pb-24
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
