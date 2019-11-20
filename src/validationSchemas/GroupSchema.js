import * as Yup from 'yup'

export const NewGroupSchema = Yup.object().shape({
    title: Yup.string()
      .required('Please enter a group title')
      .max(50),
    description: Yup.string()
    .required('Please enter a group description')
    .max(300),
    niche: Yup.string()
      .required('Please enter a niche for your group').max(50),
    experience: Yup.string()
    .required('Please enter experince level needed to join this group').max(50),
  })