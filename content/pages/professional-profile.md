---
title: Professional Profile
sections:
  - elementId: ''
    colors: colors-e
    backgroundSize: full
    title: Let's do this
    text: >-
      The Stackbit theme is flexible and scalable to every need. It can manage
      any layout and any screen.
    actions: []
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
          - pt-28
          - pb-28
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
    colors: colors-d
    title: Join our club
    text: >-
      We will notify you every time a shipment is heading to your neighborhood,
      and you could immediatly let us know if you want in or not
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
          name: address
          label: Address
          hideLabel: true
          placeholder: Address
          isRequired: true
          width: full
        - type: CheckboxFormControl
          name: updatesConsent
          label: Sign me up to recieve updates
          isRequired: false
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
colors: colors-d
excerpt: >-
  Nunc rutrum felis dui, ut consequat sapien scelerisque vel. Integer
  condimentum dignissim justo vel faucibus.
featuredImage:
  type: ImageBlock
  url: 'https://assets.stackbit.com/components/images/default/post-4.jpeg'
  altText: Post thumbnail image
  caption: ''
media:
  type: ImageBlock
  url: 'https://assets.stackbit.com/components/images/default/post-4.jpeg'
  altText: Post image
---
