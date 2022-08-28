import React from 'react'


class Footer extends React.Component {
  render() {
    return (
      <footer className="uk-text-center uk-text-middle footer">
        <span> © Stephania Alexis</span> <br />
        <a
          uk-icon="icon: github"
          href="https://github.com/Babygirl110609"
          className="contact-icon contact-link-icon"
          target="_blank"
        ></a>
        <a
          uk-icon="icon: mail"
          className="contact-icon contact-link-icon"
          href="mailto:mrslagos1592@yahoo.com"
        ></a>
        
      </footer>
    )
  }
}

export default Footer