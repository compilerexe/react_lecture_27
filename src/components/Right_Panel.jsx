var React = require('react');

var Right_Panel = React.createClass({
  render: function() {

    var Temp_Css = {
      color: '#fff',
      backgroundColor: '#ffad33'
    };

    var List_one_css = [{
      paddingTop: '10px',
      color: '#fff',
      backgroundColor: '#99bbff'
    },{
      fontSize: '20px'
    }];

    var List_two_css = [{
      paddingTop: '10px',
      color: '#fff',
      backgroundColor: '#cc99ff'
    },{
      fontSize: '20px'
    }];

    var List_three_css = [{
      paddingTop: '10px',
      color: '#fff',
      backgroundColor: '#ff9999'
    },{
      fontSize: '20px'
    }];

    var List_four_css = [{
      paddingTop: '10px',
      color: '#fff',
      backgroundColor: '#bfff80'
    },{
      fontSize: '20px'
    }];

    return (
      <div>
        <div className="form-group col-sm-12">
          <div className="panel panel-default">
            <div className="panel-body text-center" style={Temp_Css}>
              <h2>{this.props.right_temp_title}</h2>
              <small>{this.props.right_temp_detail}</small>
            </div>
          </div>
        </div>
        <div className="form-group col-sm-12">
          <div className="panel panel-default">
            <div className="col-sm-12" style={List_one_css[0]}>
              <small>{this.props.right_title_one}</small>
              <p style={List_one_css[1]}>{this.props.right_detail_one}</p>
            </div>
            <div className="panel-body form-group">

            </div>
          </div>
        </div>
        <div className="form-group col-sm-12">
          <div className="panel panel-default">
            <div className="col-sm-12" style={List_two_css[0]}>
              <small>{this.props.right_title_two}</small>
              <p style={List_two_css[1]}>{this.props.right_detail_two}</p>
            </div>
            <div className="panel-body form-group">

            </div>
          </div>
        </div>
        <div className="form-group col-sm-12">
          <div className="panel panel-default">
            <div className="col-sm-12" style={List_three_css[0]}>
              <small>{this.props.right_title_three}</small>
              <p style={List_three_css[1]}>{this.props.right_detail_three}</p>
            </div>
            <div className="panel-body form-group">

            </div>
          </div>
        </div>
        <div className="form-group col-sm-12">
          <div className="panel panel-default">
            <div className="col-sm-12" style={List_four_css[0]}>
              <small>{this.props.right_title_four}</small>
              <p style={List_four_css[1]}>{this.props.right_detail_four}</p>
            </div>
            <div className="panel-body form-group">

            </div>
          </div>
        </div>
      </div>
    );

  }
});

module.exports = Right_Panel;
