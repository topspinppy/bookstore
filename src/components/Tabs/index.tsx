import { Tabs } from "antd"
const { TabPane } = Tabs

interface ITabsProps {
  children?: React.ReactNode
}

const Tab: React.FC<ITabsProps> = () => {

  const onChange = (key: string) => {
    console.log(key);
  };
  
  return (
    <Tabs defaultActiveKey="1" onChange={onChange} className="font-kanit">
      <TabPane tab="1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="2" key="2">
        Content of Tab Pane 2
      </TabPane>
    </Tabs>
  )
}

export default Tab
