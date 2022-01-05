---
title: About
layout: PageLayout
sections:
  - elementId: ''
    colors: colors-d
    variant: variant-a
    title: ''
    subtitle: ''
    testimonials:
      - quote: >-
          "It’s great to see someone taking action while still maintaining a
          sustainable fish supply to home cooks."
        name: Oliver Mills
        title: Head chef at Parks
        image:
          type: ImageBlock
          url: /images/gallery-2.jpg
          altText: A man fishing
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
        textAlign: center
      subtitle:
        textAlign: center
    type: TestimonialsSection
  - elementId: ''
    colors: colors-e
    variant: variant-b
    title: ''
    subtitle: ''
    testimonials:
      - quote: >-
          "It’s great to see someone taking action while still maintaining a
          sustainable fish supply to home cooks."
        name: John Doe
        title: Head chef at Parks
        image:
          type: ImageBlock
          url: /images/fisherman.jpg
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
  - type: ContactSection
    colors: colors-d
    title: Contact
    text: >
      We will notify you every time a shipment is heading to your neighborhood,
      and you could immediatly let us know if you want in or not
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
        - name: address
          label: Address
          hideLabel: true
          placeholder: Address
          isRequired: true
          width: full
          type: TextFormControl
        - name: updatesConsent
          label: Sign me up to recieve updates
          isRequired: false
          width: full
          type: CheckboxFormControl
      submitLabel: Submit form
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
          - ml-4
          - mr-4
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
