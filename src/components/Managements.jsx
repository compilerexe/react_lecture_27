var React = require('react');
var Top_Panel = require('./Top_Panel.jsx');
var Center_Panel = require('./Center_Panel.jsx');
var Right_Panel = require('./Right_Panel.jsx');

var Top_options = [{
  title: '20',
  detail: 'New followers added this month'
},{
  title: '$ 1,250',
  detail: 'Averang Monthly Income'
},{
  title: '$ 13,865',
  detail: 'Yearly Income Goal'
}];

var Center_options = [{
  title: '15,080',
  detail: 'Shot Views'
},{
  title: '12,000',
  detail: 'Likes'
},{
  title: '5,100',
  detail: 'Comments'
}];

var Right_options = [{
  title: '18',
  symbol: String.fromCharCode(176),
  detail: 'Paris'
},{
  title: 'New Visitors',
  detail: '1.5K'
},{
  title: 'Bounce Rate',
  detail: '50%'
},{
  title: 'Searchs',
  detail: '28 %'
},{
  title: 'Traffic',
  detail: '140.5 kb'
}];

var Managements = React.createClass({
  render: function() {

    var Top_Css = {
      marginTop: '25px'
    };

    var Center_blank_one = {
      height: '150px',
      backgroundColor: '#99bbff'
    };

    var Center_blank_two = {
      height: '150px',
      backgroundColor: '#e6ffe6'
    };

    return (
    <div>
      <div className="col-sm-9">

        <div className="row" style={Top_Css}>
          <Top_Panel
            top_title_one={Top_options[0].title}
            top_title_two={Top_options[1].title}
            top_title_three={Top_options[2].title}

            top_detail_one={Top_options[0].detail}
            top_detail_two={Top_options[1].detail}
            top_detail_three={Top_options[2].detail}
          />
        </div>

        <div className="row">
          <div className="form-group col-sm-12">
            <div style={Center_blank_one}>
            </div>
            <Center_Panel
              center_title_one={Center_options[0].title}
              center_title_two={Center_options[1].title}
              center_title_three={Center_options[2].title}

              center_detail_one={Center_options[0].detail}
              center_detail_two={Center_options[1].detail}
              center_detail_three={Center_options[2].detail}
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-sm-12">
            <div style={Center_blank_two}>
            </div>
            <Center_Panel
              center_title_one={Center_options[0].title}
              center_title_two={Center_options[1].title}
              center_title_three={Center_options[2].title}

              center_detail_one={Center_options[0].detail}
              center_detail_two={Center_options[1].detail}
              center_detail_three={Center_options[2].detail}
            />
          </div>
        </div>

      </div>

      <div className="col-sm-3" style={Top_Css}>
      <Right_Panel
        right_temp_title={Right_options[0].title + Right_options[0].symbol}
        right_temp_detail={Right_options[0].detail}

        right_title_one={Right_options[1].title}
        right_detail_one={Right_options[1].detail}
        right_title_two={Right_options[2].title}
        right_detail_two={Right_options[2].detail}
        right_title_three={Right_options[3].title}
        right_detail_three={Right_options[3].detail}
        right_title_four={Right_options[4].title}
        right_detail_four={Right_options[4].detail}
      />
      </div>

    </div>
    );
  }
});

module.exports = Managements;
