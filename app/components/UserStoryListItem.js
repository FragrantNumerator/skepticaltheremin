var React = require('react');

var UserStoryListItem = React.createClass({

  handleClick() {
    this.props.storyClick(this.props.story);
  },

  render() {

    return (
      <li>
        <a onClick={this.handleClick}>
          {this.props.story}
        </a>
      </li>
    );
  }
  
});

module.exports = UserStoryListItem;
