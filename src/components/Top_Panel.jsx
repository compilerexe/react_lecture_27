var React = require('react');

var Top_Panel = React.createClass({
  render: function() {

    var Detail_Style = {
      color: '#bfbfbf'
    }

    var Temp_Font = {
      fontSize: '30px'
    };

    var Temp_Style = {
      color: '#fff',
      backgroundColor: '#ff9933'
    };

    return (
      <div>
        <div className="col-sm-4">
          <div className="panel panel-default">
            <div className="panel-body">
              <h4>{this.props.top_title_one}</h4>
              <small style={Detail_Style}>{this.props.top_detail_one}</small>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="panel panel-default">
            <div className="panel-body">
              <h4>{this.props.top_title_two}</h4>
              <small style={Detail_Style}>{this.props.top_detail_two}</small>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="panel panel-default">
            <div className="panel-body">
              <h4>{this.props.top_title_three}</h4>
              <small style={Detail_Style}>{this.props.top_detail_three}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Top_Panel;
