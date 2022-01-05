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

      <style>

      * {
        box-sizing: border-box;
      }


      .column {

      float: left;

      width: 25%;

      padding: 5px;

      }


      /\* Clearfix (clear floats) \*/

      .row::after {

      content: "";

      clear: both;

      display: table;

      }


      /\* Responsive layout - makes the three columns stack on top of each other
      instead of next to each other \*/

      @media screen and (max-width: 500px) {

      .column {

      width: 50%;

      }

      }

      </style>


      <body>

      <div class="row"> <div class="column"> <img src="images/2.svg" alt="logo"
      draggable="false" > </div> <div class="column"> <img src="images/3.svg"
      alt="logo" draggable="false" > </div> <div class="column"> <img
      src="images/4.svg" alt="logo" draggable="false"> </div> <div
      class="column"> <img src="images/5.svg" alt="logo" draggable="false">
      </div> </div>

      </body>
  - colors: colors-d
    elementId: ''
    subtitle: ''
    items:
      - type: FeaturedItem
        title: Faster
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
        title: Collective Community Spirit
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
  - type: HeroSection
    elementId: homepage-hero-1
    colors: colors-d
    backgroundSize: full
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
          - pt-10
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
