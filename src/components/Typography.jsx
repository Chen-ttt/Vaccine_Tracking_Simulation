import { Box, styled } from '@mui/material'
import clsx from 'clsx'

const StyledBox = styled(Box)(({ theme, textTransformStyle, ellipsis }) => ({
  textTransform: textTransformStyle || 'none',
  whiteSpace: ellipsis ? 'nowrap' : 'normal',
  overflow: ellipsis ? 'hidden' : '',
  textOverflow: ellipsis ? 'ellipsis' : '',
}))

export const H1 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({ [className || '']: true })}
      component="h1"
      mb={0}
      mt={0}
      fontSize="1.6rem"
      fontWeight="700"
      lineHeight="1.5"
      // color={'#ffffff'}
      {...props}>
      {children}
    </StyledBox>
  )
}

export const H2 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({ [className || '']: true })}
      component="h2"
      mb={0}
      mt={0}
      fontSize="1.2rem"
      fontWeight="600"
      {...props}>
      {children}
    </StyledBox>
  )
}

export const H3 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({ [className || '']: true })}
      component="h3"
      mb={0}
      mt={0}
      fontSize="1.3rem"
      fontWeight="600"
      {...props}>
      {children}
    </StyledBox>
  )
}

export const H4 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || '']: true,
      })}
      component="h4"
      mb={0}
      mt={0}
      fontSize="16px"
      fontWeight="500"
      lineHeight="1.5"
      display="inline-block"
      position="absolute"
      marginLeft="10px"
      {...props}>
      {children}
    </StyledBox>
  )
}

export const H5 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || '']: true,
      })}
      component="h5"
      mb={0}
      mt={0}
      fontSize="14px"
      fontWeight="500"
      lineHeight="1.5"
      {...props}>
      {children}
    </StyledBox>
  )
}

export const H6 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || '']: true,
      })}
      component="h6"
      mb={0}
      mt={0}
      fontSize="0.8rem"
      fontWeight="500"
      lineHeight="1.5"
      marginLeft="0.5rem"
      marginBottom="0.2rem"
      {...props}>
      {children}
    </StyledBox>
  )
}

export const Paragraph = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || '']: true,
      })}
      component="p"
      mb={0}
      mt={0}
      fontSize="14px"
      {...props}>
      {children}
    </StyledBox>
  )
}

export const Small = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || '']: true,
      })}
      component="small"
      fontSize="12px"
      fontWeight="500"
      lineHeight="2.0"
      color={'#949494'}
      {...props}>
      {children}
    </StyledBox>
  )
}

export const Span = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || '']: true,
      })}
      component="span"
      lineHeight="1.5"
      {...props}>
      {children}
    </StyledBox>
  )
}

export const Tiny = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return (
    <StyledBox
      textTransformStyle={textTransform}
      ellipsis={ellipsis}
      className={clsx({
        [className || '']: true,
      })}
      component="small"
      fontSize="10px"
      lineHeight="1.5"
      {...props}>
      {children}
    </StyledBox>
  )
}
