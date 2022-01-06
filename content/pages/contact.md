---
title: Contact
sections:
  - elementId: ''
    colors: colors-c
    variant: variant-a
    subtitle: ''
    text: |-
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Sed ut perspiciatis undeomnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
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
  - elementId: ''
    colors: colors-c
    backgroundSize: full
    title: Contact
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
          label: Name
          hideLabel: false
        - type: EmailFormControl
          name: email
          placeholder: Your email
          isRequired: 'true'
          width: 1/2
          label: Email
        - type: TextFormControl
          name: message
          placeholder: Your message
          isRequired: 'false'
          width: full
          label: Message
          hideLabel: false
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
          - pt-10
          - pb-5
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
    type: ContactSection
layout: PageLayout
---
