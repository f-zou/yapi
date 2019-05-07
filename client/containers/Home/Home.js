import './Home.scss';
import React, { PureComponent as Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Icon, Card } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import LogoSVG from '../../components/LogoSVG/index.js';
import { changeMenuItem } from '../../reducer/modules/menu';
const plugin = require('client/plugin.js');

const ThirdLogin = plugin.emitHook('third_login');
const HomeGuest = () => (
  <div className="g-body">
    <div className="m-bg">
      <div className="m-bg-mask m-bg-mask0" />
      <div className="m-bg-mask m-bg-mask1" />
      <div className="m-bg-mask m-bg-mask2" />
      <div className="m-bg-mask m-bg-mask3" />
    </div>
    <div className="main-one">
      <div className="container">
        <Row>
          <Col span={24}>
            <div className="home-header">
              <a href="#" className="item">
                YAPI
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://yapi.ymfe.org"
                className="item"
              >
                docs
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={9} xs={24}>
            <div className="home-des">
              <div className="logo">
                <LogoSVG length="72px" />
                <span className="name">YAPI</span>
              </div>
              <div className="detail">
                Efficient, easy to use, powerful API management platform <br />
                <span className="desc">Designed to provide more elegant interface management services for developers, producters, and testers</span>
              </div>
              <div className="btn-group">
                <Link to="/login">
                  <Button type="primary" className="btn-home btn-login">
                    login / register
                  </Button>
                </Link>
                {ThirdLogin != null ? <ThirdLogin /> : null}
              </div>
            </div>
          </Col>
          <Col lg={15} xs={0} className="col-img">
            <div className="img-container">
              
            </div>
          </Col>
        </Row>
      </div>
    </div>
    <div className="feat-part section-feature">
      <div className="container home-section">
        <h3 className="title">Management platform designed for API developers</h3>
        <span className="desc">
    YApi makes interface development simpler , more efficient , more readable and more maintainable. it makes team collaboration more reasonable.
        </span>
        <Row key="feat-motion-row">
          <Col span={8} className="section-item" key="feat-wrapper-1">
            <Icon type="appstore-o" className="img" />
            <h4 className="title">Project Management</h4>
            <span className="desc">rovide basic functions for project grouping, project management and interface management </span>
          </Col>
          <Col span={8} className="section-item" key="feat-wrapper-2">
            <Icon type="api" className="img" />
            <h4 className="title">interface management</h4>
            <span className="desc">
             Friendly interface documentation, websocket-based multiplayer collaboration interface editing and postman-like testing tools that enable multiplayer collaboration to increase development efficiency
            </span>
          </Col>
          <Col span={8} className="section-item" key="feat-wrapper-3">
            <Icon type="database" className="img" />
            <h4 className="title">MockServer</h4>
            <span className="desc">based on Mockjs， Simple and powerful</span>
          </Col>
        </Row>
      </div>
    </div>
    <div className="feat-part m-mock m-skew home-section">
      <div className="m-skew-bg">
        <div className="m-bg-mask m-bg-mask0" />
        <div className="m-bg-mask m-bg-mask1" />
        <div className="m-bg-mask m-bg-mask2" />
      </div>
      <div className="container skew-container">
        <h3 className="title">Powerful Mock service</h3>
        <span className="desc">Mock all you want service here</span>
        <Row className="row-card">
          <Col lg={12} xs={24} className="section-card">
            <Card title="Mock 规则">
              <p className="mock-desc">
                By learning some simple Mock
                Template rules make it easy to write interfaces。This will greatly improve the efficiency of defining interfaces。no need to worry about writing Mock data:
                All data can be randomly generated in real time.
              </p>
              <div className="code">
                <ol start="1">
                  <li className="item">
                    <span className="orderNum orderNum-first">1</span>
                    <span>
                      <span>&#123;&ensp;&ensp;</span>
                    </span>
                  </li>
                  <li className="item">
                    <span className="orderNum">2</span>
                    <span>
                      &ensp;&ensp;&ensp;&ensp;<span className="string">
                        &quot;errcode|200-500&quot;
                      </span>
                      <span>
                        :&ensp;<span className="number">200</span>,&ensp;&ensp;
                      </span>
                    </span>
                  </li>
                  <li className="item">
                    <span className="orderNum">3</span>
                    <span>
                      &ensp;&ensp;&ensp;&ensp;<span className="string">&quot;errmsg|4-8&quot;</span>
                      <span>:&ensp;</span>
                      <span className="string">&quot;@string&quot;</span>
                      <span>,&ensp;&ensp;</span>
                    </span>
                  </li>
                  <li className="item">
                    <span className="orderNum">4</span>
                    <span>
                      &ensp;&ensp;&ensp;&ensp;<span className="string">&quot;data&quot;</span>
                      <span>:&ensp;&#123;&ensp;&ensp;</span>
                    </span>
                  </li>
                  <li className="item">
                    <span className="orderNum">5</span>
                    <span>
                      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className="string">
                        &quot;boolean|1&quot;
                      </span>
                      <span>:&ensp;</span>
                      <span className="keyword">true</span>
                      <span>,&ensp;&ensp;</span>
                    </span>
                  </li>
                  <li className="item">
                    <span className="orderNum">6</span>
                    <span>
                      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className="string">
                        &quot;array|2&quot;
                      </span>
                      <span>
                        :&ensp;&#91;<span className="string">&quot;Bob&quot;</span>,&ensp;<span className="string">
                          &quot;Jim&quot;
                        </span>&#93;,&ensp;&ensp;
                      </span>
                    </span>
                  </li>
                  <li className="item">
                    <span className="orderNum">7</span>
                    <span>
                      &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<span className="string">
                        &quot;combine&quot;
                      </span>
                      <span>:&ensp;</span>
                      <span className="string">&quot;@boolean&ensp;&amp;&ensp;@array&quot;</span>
                      <span>&ensp;&ensp;</span>
                    </span>
                  </li>
                  <li className="item">
                    <span className="orderNum">8</span>
                    <span>&ensp;&ensp;&ensp;&ensp;&#125;&ensp;&ensp;</span>
                  </li>
                  <li className="item">
                    <span className="orderNum orderNum-last">9</span>
                    <span>&#125;&ensp;&ensp;</span>
                  </li>
                </ol>
              </div>
            </Card>
          </Col>
          <Col lg={12} xs={24} className="section-card mock-after">
            <Card title="生成的 Mock 数据">
              <p className="mock-desc">
            The generated Mock data can be directly used via ajax call.
            an also be used via a server proxy（ No need to modify the a line code）
              </p>
              <div className="code">
                <ol start="1">
                  <li className="alt">
                    <span className="orderNum orderNum-first">1</span>
                    <span>
                      <span>&#123;&ensp;&ensp;</span>
                    </span>
                  </li>
                  <li className="">
                    <span className="orderNum">2</span>
                    <span>
                      &ensp;&ensp;<span className="string">&quot;errcode&quot;</span>
                      <span>:&ensp;</span>
                      <span className="number">304</span>
                      <span>,&ensp;&ensp;</span>
                    </span>
                  </li>
                  <li className="alt">
                    <span className="orderNum">3</span>
                    <span>
                      &ensp;&ensp;<span className="string">&quot;errmsg&quot;</span>
                      <span>:&ensp;</span>
                      <span className="string">&quot;JtkMIoRu)N#ie^h%Z77[F)&quot;</span>
                      <span>,&ensp;&ensp;</span>
                    </span>
                  </li>
                  <li className="">
                    <span className="orderNum">4</span>
                    <span>
                      &ensp;&ensp;<span className="string">&quot;data&quot;</span>
                      <span>:&ensp;&#123;&ensp;&ensp;</span>
                    </span>
                  </li>
                  <li className="alt">
                    <span className="orderNum">5</span>
                    <span>
                      &ensp;&ensp;&ensp;&ensp;<span className="string">&quot;boolean&quot;</span>
                      <span>:&ensp;</span>
                      <span className="keyword">true</span>
                      <span>,&ensp;&ensp;</span>
                    </span>
                  </li>
                  <li className="">
                    <span className="orderNum">6</span>
                    <span>
                      &ensp;&ensp;&ensp;&ensp;<span className="string">&quot;array&quot;</span>
                      <span>
                        :&ensp;
                      </span>&#91;<span className="string">&quot;Bob&quot;</span>,&ensp;<span className="string">
                        &quot;Jim&quot;
                      </span>,&ensp;<span className="string">&quot;Bob&quot;</span>,&ensp;<span className="string">
                        &quot;Jim&quot;
                      </span>&#93;<span>,&ensp;&ensp;</span>
                    </span>
                  </li>
                  <li className="alt">
                    <span className="orderNum">7</span>
                    <span>
                      &ensp;&ensp;&ensp;&ensp;<span className="string">&quot;combine&quot;</span>
                      <span>:&ensp;</span>
                      <span className="string">
                        &quot;true & Bob,&ensp;Jim,&ensp;Bob,&ensp;Jim&quot;
                      </span>
                      <span>&ensp;&ensp;</span>
                    </span>
                  </li>
                  <li className="">
                    <span className="orderNum">8</span>
                    <span>&ensp;&ensp;&#125;&ensp;&ensp;</span>
                  </li>
                  <li className="alt">
                    <span className="orderNum orderNum-last">9</span>
                    <span>&#125;&ensp;&ensp;</span>
                  </li>
                </ol>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
    <div className="home-section section-manage">
      <div className="container">
        <Row className="row-card" style={{ marginBottom: '.48rem' }}>
          <Col lg={7} xs={10} className="section-card">
            <Card>
              <div className="section-block block-first">
                <h4>administrator(* N)</h4>
                <p className="item"> -  Create a group</p>
                <p className="item"> - Distribution team leader,</p>
                <p className="item"> -  Manage all member's information</p>
              </div>
              <div className="section-block block-second">
                <h4>Leader(* N)</h4>
                <p className="item"> - Create a project</p>
                <p className="item"> - Manage group or project information</p>
                <p className="item"> -  Manage developers and members</p>
              </div>
              <div className="section-block block-third">
                <h4>Developer(* N) / member(* N)</h4>
                <p className="item"> - Creating groupings is not allowed</p>
                <p className="item"> - Modify group or project information is not allowed</p>
              </div>
            </Card>
          </Col>
          <Col lg={17} xs={14} className="section-card manage-word">
            <Icon type="team" className="icon" />
            <h3 className="title">Flat management mode</h3>
            <p className="desc">
            The logic of interface management is complex, the operation frequency is high, and the layer approval will seriously slow down the production efficiency. Therefore, the traditional pyramid management mode is not applicable
            </p>
            <p className="desc">
              YAPI
            Introduce the idea of the flat management mode into the rights management of the product. The super administrator has the highest authority and assigns the rights to several group leaders. The super administrator only needs to manage the group leader, and actually manages the YAPI group.            </p>
          </Col>
        </Row>
      </div>
    </div>
  </div>
);
HomeGuest.propTypes = {
  introList: PropTypes.array
};

@connect(
  state => ({
    login: state.user.isLogin
  }),
  {
    changeMenuItem
  }
)
@withRouter
class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.login) {
      this.props.history.push('/group/261');
    }
  }

  componentDidMount() {}
  static propTypes = {
    introList: PropTypes.array,
    login: PropTypes.bool,
    history: PropTypes.object,
    changeMenuItem: PropTypes.func
  };
  toStart = () => {
    this.props.changeMenuItem('/group');
  };
  render() {
    return (
      <div className="home-main">
        <HomeGuest introList={this.props.introList} />
        <div className="row-tip">
          <div className="container">
            <div className="tip-title">
              <h3 className="title">Ready to use？</h3>
              <p className="desc"> Please use the registered account and see the documentation for more information.</p>
            </div>
            <div className="tip-btns">
              <div className="btn-group">
                <Link to="/login">
                  <Button type="primary" className="btn-home btn-login">
                    login / register
                  </Button>
                </Link>
                <Button className="btn-home btn-home-normal">
                  <a target="_blank" rel="noopener noreferrer" href="https://yapi.ymfe.org">
                    docus
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Home.defaultProps={
//   introList:[{
//     title:"接口管理",
//     des:"满足你的所有接口管理需求。不再需要为每个项目搭建独立的接口管理平台和编写离线的接口文档，其权限管理和项目日志让协作开发不再痛苦。",
//     detail:[
//       {title:"团队协作",des:"多成员协作，掌握项目进度",iconType:"team"},
//       {title:"权限管理",des:"设置每个成员的操作权限",iconType:"usergroup-add"},
//       {title:"项目日志",des:"推送项目情况，掌握更新动态",iconType:"schedule"}
//     ],
//     img:"./image/demo-img.jpg"
//   },{
//     title:"接口测试",
//     des:"一键即可得到返回结果。根据用户的输入接口信息如协议、URL、接口名、请求头、请求参数、mock规则生成Mock接口，这些接口会自动生成模拟数据。",
//     detail:[
//       {title:"编辑接口",des:"团队开发时任何人都可以在权限许可下创建、修改接口",iconType:"tags-o"},
//       {title:"mock请求",des:"创建者可以自由构造需要的数据，支持复杂的生成逻辑",iconType:"fork"}
//     ],
//     img:"./image/demo-img.jpg"
//   }
//   ]
// };

export default Home;
