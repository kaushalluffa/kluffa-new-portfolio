import { Fragment, memo } from 'react';
import './style.scss';
import {
  Apollo,
  Axios,
  Babel,
  Css,
  Cypress,
  Docker,
  ESSix,
  Firebase,
  Github,
  Gmail,
  Graphql,
  Jest,
  Js,
  Kafka,
  Kubernetes,
  Linkedin,
  Mongodb,
  Mui,
  MySql,
  NextJs,
  NodeJs,
  Npm,
  Playwright,
  Postgres,
  Postman,
  Prettier,
  RabbitMq,
  React,
  ReactQuery,
  ReactRouter,
  Redis,
  Strapi,
  Tailwind,
  Typescript,
  Vercel,
  VsCode,
  Yarn,
} from '../../../assets/icons/index';

function TechStack({ heading, stack }: { heading: string; stack: string[] }) {
  const techStack: Record<string, React.ReactNode> = {
    apollo: <Apollo />,
    axios: <Axios />,
    babel: <Babel />,
    css: <Css />,
    cypress: <Cypress />,
    docker: <Docker />,
    essix: <ESSix />,
    firebase: <Firebase />,
    github: <Github />,
    gmail: <Gmail />,
    graphql: <Graphql />,
    jest: <Jest />,
    js: <Js />,
    kafka: <Kafka />,
    kubernetes: <Kubernetes />,
    linkedin: <Linkedin />,
    mongodb: <Mongodb />,
    mui: <Mui />,
    mysql: <MySql />,
    nextjs: <NextJs />,
    nodejs: <NodeJs />,
    npm: <Npm />,
    playwright: <Playwright />,
    postgres: <Postgres />,
    postman: <Postman />,
    prettier: <Prettier />,
    rabbitmq: <RabbitMq />,
    react: <React />,
    reactquery: <ReactQuery />,
    reactrouter: <ReactRouter />,
    redis: <Redis />,
    strapi: <Strapi />,
    tailwind: <Tailwind />,
    typescript: <Typescript />,
    vercel: <Vercel />,
    vscode: <VsCode />,
    yarn: <Yarn />,
  };
  return (
    <div className="tech__stack">
      <div className="tech__stack--heading">{heading}:</div>
      <div className="tech__stack--icons">
        {stack?.map((stackItem: string) => (
          <Fragment key={stackItem}>{techStack?.[stackItem]}</Fragment>
        ))}
      </div>
    </div>
  );
}

export default memo(TechStack);
