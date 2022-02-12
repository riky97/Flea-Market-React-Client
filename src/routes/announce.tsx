import React from "react";
import { PageHeader, Button, Descriptions, Select } from "antd";
import { Row, Col, Divider } from "antd";
import { Cards } from "../component/announce/card";
const { Option } = Select;

/*function getId(index: number) {
  return `${elemPrefix}${index}`;
}
function getMeta(index: number) {
  return `${eleMeta}${index}`;
}*/
/*function getItems() {
  return Array(10)
    .fill(0)
    .map((_) => ({ id: elemPrefix, metas: eleMeta }));
}*/

class Announce extends React.Component {
  obj = () => {
    const elemPrefix: string = "test";
    const eleMeta: string = "price";
    var rows: any = [];
    for (var i = 0; i < 10; i++) {
      rows.push(
        <Col key={i.toString()} span={8}>
          <Cards
            title="c"
            itemId={"c" + i.toString()}
            meta="c"
            key={i.toString()}
          />
        </Col>
      );
    }
    console.log(rows);
    return rows;
  };
  render(): React.ReactNode {
    return (
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title="Title"
          subTitle="This is a subtitle"
          extra={[
            <Select size="large" placeholder="filter by" style={{ width: 200 }}>
              <Option key={1}>filter1</Option>
              <Option key={2}>"filter1"</Option>
              <Option key={3}>"filter1"</Option>
            </Select>,
          ]}
        ></PageHeader>
        <Divider orientation="left"></Divider>
        <Row gutter={[24, 24]}>{this.obj}</Row>
      </div>
    );
  }
}
export default Announce;
