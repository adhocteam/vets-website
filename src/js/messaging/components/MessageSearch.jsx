import React from 'react';
import MessageSearchAdvanced from './MessageSearchAdvanced';

class MessageSearch extends React.Component {
  render() {
    return (
      <form
          className={this.props.cssClass}
          id="msg-search"
          onSubmit={this.props.onSubmit}>
        <label
            className="usa-sr-only"
            htmlFor="msg-search-simple">Search terms</label>
        <div className="va-flex va-flex--stretch">
          <input
              id="msg-search-simple"
              name="mquery"
              type="search"/>
          <button
              type="submit"
              className="msg-search-btn">
            <i className="fa fa-search"></i>
            <span className="msg-search-btn-text">Search</span>
          </button>
        </div>
        <MessageSearchAdvanced
            isVisible={this.props.isAdvancedVisible}
            onAdvancedSearch={this.props.onAdvancedSearch}/>
      </form>);
  }
}

MessageSearch.propTypes = {
  cssClass: React.PropTypes.string,
  isAdvancedVisible: React.PropTypes.bool.isRequired,
  onAdvancedSearch: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func
};

export default MessageSearch;