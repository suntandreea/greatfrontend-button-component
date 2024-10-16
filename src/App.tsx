import Button from './components/Button.tsx';
import './App.scss';

function App() {

  return (
    <section>
      <div className="row">
        <Button icon="none" disabled={false}>Button CTA</Button>
        <Button size="l" icon="left" disabled={false}>Button CTA</Button>
        <Button size="xl" icon="right" disabled={false}>Button CTA</Button>
        <Button size="xxl" icon="both" disabled={false}>Button CTA</Button>
        <Button size="xxl" icon="none" disabled={true}>Button CTA</Button>
        <Button size="m" icon="only" disabled={false}>Button CTA</Button>
        <Button size="l" icon="only" disabled={false}>Button CTA</Button>
        <Button size="xl" icon="only" disabled={false}>Button CTA</Button>
        <Button size="xxl" icon="only" disabled={false}>Button CTA</Button>
        <Button size="xxl" icon="only" disabled={true}>Button CTA</Button>
      </div>

      <div className="row">
        <Button type="secondary" icon="none" disabled={false}>Button CTA</Button>
        <Button type="secondary" size="l" icon="left" disabled={false}>Button CTA</Button>
        <Button type="secondary" size="xl" icon="right" disabled={false}>Button CTA</Button>
        <Button type="secondary" size="xxl" icon="both" disabled={false}>Button CTA</Button>
        <Button type="secondary" size="xxl" icon="none" disabled={true}>Button CTA</Button>
        <Button type="secondary" size="m" icon="only" disabled={false}>Button CTA</Button>
        <Button type="secondary" size="l" icon="only" disabled={false}>Button CTA</Button>
        <Button type="secondary" size="xl" icon="only" disabled={false}>Button CTA</Button>
        <Button type="secondary" size="xxl" icon="only" disabled={false}>Button CTA</Button>
        <Button type="secondary" size="xxl" icon="only" disabled={true}>Button CTA</Button>
      </div>

      <div className="row">
        <Button type="tertiary" icon="none" disabled={false}>Button CTA</Button>
        <Button type="tertiary" size="l" icon="left" disabled={false}>Button CTA</Button>
        <Button type="tertiary" size="xl" icon="right" disabled={false}>Button CTA</Button>
        <Button type="tertiary" size="xxl" icon="both" disabled={false}>Button CTA</Button>
        <Button type="tertiary" size="xxl" icon="none" disabled={true}>Button CTA</Button>
        <Button type="tertiary" size="m" icon="only" disabled={false}>Button CTA</Button>
        <Button type="tertiary" size="l" icon="only" disabled={false}>Button CTA</Button>
        <Button type="tertiary" size="xl" icon="only" disabled={false}>Button CTA</Button>
        <Button type="tertiary" size="xxl" icon="only" disabled={false}>Button CTA</Button>
        <Button type="tertiary" size="xxl" icon="only" disabled={true}>Button CTA</Button>
      </div>

      <div className="row">
        <Button type="link" icon="none" disabled={false}>Button CTA</Button>
        <Button type="link" size="l" icon="left" disabled={false}>Button CTA</Button>
        <Button type="link" size="xl" icon="right" disabled={false}>Button CTA</Button>
        <Button type="link" size="xxl" icon="both" disabled={false}>Button CTA</Button>
        <Button type="link" size="xxl" icon="none" disabled={true}>Button CTA</Button>
        <Button type="link" size="m" icon="only" disabled={false}>Button CTA</Button>
        <Button type="link" size="l" icon="only" disabled={false}>Button CTA</Button>
        <Button type="link" size="xl" icon="only" disabled={false}>Button CTA</Button>
        <Button type="link" size="xxl" icon="only" disabled={false}>Button CTA</Button>
        <Button type="link" size="xxl" icon="only" disabled={true}>Button CTA</Button>
      </div>

      <div className="row">
        <Button type="link" color="gray" icon="none" disabled={false}>Button CTA</Button>
        <Button type="link" color="gray" size="l" icon="left" disabled={false}>Button CTA</Button>
        <Button type="link" color="gray" size="xl" icon="right" disabled={false}>Button CTA</Button>
        <Button type="link" color="gray" size="xxl" icon="both" disabled={false}>Button CTA</Button>
        <Button type="link" color="gray" size="xxl" icon="none" disabled={true}>Button CTA</Button>
        <Button type="link" color="gray" size="m" icon="only" disabled={false}>Button CTA</Button>
        <Button type="link" color="gray" size="l" icon="only" disabled={false}>Button CTA</Button>
        <Button type="link" color="gray" size="xl" icon="only" disabled={false}>Button CTA</Button>
        <Button type="link" color="gray" size="xxl" icon="only" disabled={false}>Button CTA</Button>
        <Button type="link" color="gray" size="xxl" icon="only" disabled={true}>Button CTA</Button>
      </div>

      <div className="row">
        <Button type="destructive" icon="none" disabled={false}>Button CTA</Button>
        <Button type="destructive" size="l" icon="left" disabled={false}>Button CTA</Button>
        <Button type="destructive" size="xl" icon="right" disabled={false}>Button CTA</Button>
        <Button type="destructive" size="xxl" icon="both" disabled={false}>Button CTA</Button>
        <Button type="destructive" size="xxl" icon="none" disabled={true}>Button CTA</Button>
        <Button type="destructive" size="m" icon="only" disabled={false}>Button CTA</Button>
        <Button type="destructive" size="l" icon="only" disabled={false}>Button CTA</Button>
        <Button type="destructive" size="xl" icon="only" disabled={false}>Button CTA</Button>
        <Button type="destructive" size="xxl" icon="only" disabled={false}>Button CTA</Button>
        <Button type="destructive" size="xxl" icon="only" disabled={true}>Button CTA</Button>
      </div>
    </section>
  )
}

export default App

