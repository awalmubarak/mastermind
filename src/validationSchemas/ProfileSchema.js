import * as Yup from 'yup'

const FILE_SIZE = 2 * 1024;

    const SUPPORTED_FORMATS = [
      "image/jpg",
      "image/jpeg",
      "image/gif",
      "image/png"
    ];

export const stepOne = Yup.object().shape({
    name: Yup.string()
      .required('Please enter your name'),
    bio: Yup.string()
      .required("Enter a short info about yourself")
      .max(300)
  })

export const stepTwo = Yup.object().shape({
    linkedin: Yup.string().url("Please enter a valid LinkedIn URL"),
    twitter: Yup.string().url("Please enter a valid Twitter URL"),
    facebook: Yup.string().url("Please enter a valid Facebook URL")
  })

  export const stepThree = Yup.object().shape({
    image: Yup
        .mixed()
        .test(
        "fileSize",
        "File too large",
        value => value && value.size <= FILE_SIZE
        )
        .test(
        "fileFormat",
        "Unsupported Format Image",
        value => value && SUPPORTED_FORMATS.includes(value.type)
        )
  })