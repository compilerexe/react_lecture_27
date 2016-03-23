var React = require('react');

var Center_Panel = React.createClass({
  render: function() {

    var Detail_CSS = {
      color: '#fff',
      backgroundColor: '#595959'
    };

    return (
      <div>
        <div className="col-sm-4 text-center" style={Detail_CSS}>
          <div className="form-group">
            <h4>{this.props.center_title_one}</h4>
            <small>{this.props.center_detail_one}</small>
          </div>
        </div>
        <div className="col-sm-4 text-center" style={Detail_CSS}>
          <div className="form-group">
            <h4>{this.props.center_title_two}</h4>
            <small>{this.props.center_detail_two}</small>
          </div>
        </div>
        <div className="col-sm-4 text-center" style={Detail_CSS}>
          <div className="form-group">
            <h4>{this.props.center_title_three}</h4>
            <small>{this.props.center_detail_three}</small>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Center_Panel;
