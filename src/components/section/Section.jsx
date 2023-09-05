import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className='mx-auto flex max-w-max flex-col items-center gap-3'>
      {title && (
        <h2 className='pt-4'>
          <b>{title}</b>
        </h2>
      )}
      <div className='flex flex-col items-center gap-3 bg-card-color p-3'>{children}</div>
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
export default Section;
