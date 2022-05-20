const Image = ({ webp, fallback, alt = "image", ...props }) => {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <source srcSet={fallback} type="image/jpeg" />
      <img src={fallback} alt={alt} {...props} />
    </picture>
  );
};

export default Image;
