import Tabs, { TabPane } from 'rc-tabs'

interface ITabsProps {
  children?: React.ReactNode
}

const Tab: React.FC<ITabsProps> = () => {
  return (
    <Tabs onChange={() => {}}>
      <TabPane tab="tab 1" key="1">
        first
      </TabPane>
      <TabPane tab="tab 2" key="2">
        second
      </TabPane>
      <TabPane tab="tab 3" key="3">
        third
      </TabPane>
    </Tabs>
  )
}



export default Tab