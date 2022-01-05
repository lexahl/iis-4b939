---
title: About
layout: PageLayout
sections:
  - elementId: ''
    colors: colors-e
    variant: variant-b
    title: ''
    subtitle: ''
    testimonials:
      - quote: >-
          "It’s great to see someone taking action while still maintaining a
          sustainable fish supply to home cooks."
        name: Winona Lafreniere
        title: Head chef at Parks
        image:
          type: ImageBlock
          url: /images/Winona Lafreniere.jpg
          altText: John Doe
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-28
          - pb-28
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
    type: TestimonialsSection
  - type: TextSection
    colors: colors-d
    variant: variant-a
    title: About
    text: >+
      Winona dedicates her knowledge and ways of being to her Obijway ancestors.
      As the founder of Indigenous Innovative Solutions Inc., Winona brings
      together Indigenous knowledge, providing an Indigenous voice and effective
      solutions to age old challenges. Critical global dialogue on the
      importance of Indigenous perspectives for a sustainable future is required
      to ensure viability of livelihoods of future generations.


      She is deeply rooted and connected to the land, where she continues her
      lifelong journey to learn more about the traditional plant foods and
      medicines in the western boreal forest. Incorporating sustainably
      harvested and sourced botanicals, IIS Inc., unites ancestral traditions
      with modern wise practices, empowering people to connect to themselves and
      the natural world.


      #### Creating a Workforce Readiness Future


      Proudly supporting Indigenous community career development and training
      initiatives focusing on jobs of the future that lead to employment and
      business opportunities across Western Canada.


      #### On-Demand services and live learning opportunities covering a range
      of topics:

      * Project Management

      * Managing Energy Efficiency Projects

      * Environmental Stewardship Consulting

      * Employability Wise Practices

      * Indigenous Awareness

      * Human Skills Development Workshops

      * Proposal Writing

      * Indigenous Engagement Planning

      * Business Development

      * Advancing ESG and Indigenous Principles

      * Custom workshops for employer-specific organizations

      * As well as a range of resource management subjects










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
          - pt-36
          - pb-56
          - pr-4
          - pl-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
  - elementId: ''
    colors: colors-b
    quote: >-
      “This is someone else, not from our team, but she also loves fishing, so
      we thought we should highlight her.”
    backgroundImage:
      url: /images/bg.webp
      opacity: 70
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
          - pt-96
          - pb-10
          - pl-4
          - pr-4
        justifyContent: center
      quote:
        textAlign: left
      name:
        fontWeight: '400'
        fontStyle: normal
        textAlign: left
      title:
        fontWeight: '400'
        fontStyle: normal
        textAlign: left
    type: QuoteSection
  - elementId: ''
    variant: variant-c
    colors: colors-c
    title: Our Team
    subtitle: >-
      We’re a group of proffesional fisherman & friends, who love exploring the
      seas and sharing our experiences with the world.
    people:
      - content/data/team/hilary-ouse.json
      - content/data/team/dianne-ameter.json
      - content/data/team/desmond-eagle.json
      - content/data/team/hugh-saturation.json
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
          - pt-36
          - pb-72
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        textAlign: center
      actions:
        justifyContent: center
    type: FeaturedPeopleSection
  - elementId: ''
    colors: colors-d
    backgroundSize: full
    title: Contact us
    text: We look forward to hearing from you.
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: name
          placeholder: Your name
          isRequired: 'true'
          width: 1/2
        - type: CheckboxFormControl
          name: updates
          label: Sign me up to receive updates
          isRequired: 'false'
          width: full
        - type: EmailFormControl
          name: email
          placeholder: Your email
          isRequired: 'true'
          width: 1/2
        - type: TextFormControl
          name: address
          placeholder: Your home address
          isRequired: 'false'
          width: full
      submitLabel: Send Message
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
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
    type: ContactSection
---
