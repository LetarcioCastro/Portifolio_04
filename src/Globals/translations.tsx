import { createTranslation } from "../Hooks/translations";

export const { translation, setLanguage, useLanguage } = createTranslation({
  translations: {
    words: {
      projects: {
        en: 'Projects',
        pt: 'Projetos',
        es: 'Proyectos',
      },
      curriculum: {
        en: 'Curriculum',
        pt: 'Currículo',
        es: 'Currículum',
      },
      home: {
        en: 'Home',
        pt: 'Início',
        es: 'Inicio',
      },
      about_me: {
        en: 'About me',
        pt: 'Sobre mim',
        es: 'Sobre mí',
      },
      contact: {
        en: 'Contact',
        pt: 'Contato',
        es: 'Contacto',
      },
      experience: {
        en: 'Experience',
        pt: 'Experiencia',
        es: 'Experiencia',
      },
      years: {
        en: 'Years',
        pt: 'Anos',
        es: 'Años',
      },
      clients: {
        en: 'Clients',
        pt: 'Clientes',
        es: 'Clientes'
      },
      languages: {
        en: 'Languages',
        pt: 'Linguagens',
        es: 'Lenguajes'
      },
      location: {
        en: 'Location',
        pt: 'Localização',
        es: 'Ubicación'
      },
      problem: {
        en: 'Problem',
        pt: 'Problema',
        es: 'Problema',
      },
      solution: {
        en: 'Solution',
        pt: 'Solução',
        es: 'Solución',
      },
      repository: {
        en: 'Repository',
        pt: 'Repositório',
        es: 'Repositorio',
      }
    },
    projects: {
      link: {
        en: 'See project',
        pt: 'Ver projeto',
        es: 'Ver Proyecto',
      },
      cva: {
        desc: {
          en: 'Customer Management System with Events',
          pt: 'Sistema de Gerenciamento de Clientes com Eventos.',
          es: 'Sistema de Gestión de Clientes con Eventos',
        },
        problem: {
          en: 'I faced the challenge of developing a system for a client who managed thousands of customers, each stored in separate folders. However, there was a critical need to track legal events related to each customer efficiently. The client sought a solution that would provide a unified and accessible view of all legal proceedings, simplifying management and enabling agile response to each legal event. The goal was to create a system that not only organized this complex information but also facilitated the ongoing monitoring of legal events, providing a more effective and customer-centric experience.',
          pt: 'Enfrentei o desafio de desenvolver um sistema para um cliente que gerenciava milhares de clientes, cada um armazenado em pastas separadas. No entanto, havia uma necessidade crítica de acompanhar os eventos judiciais relacionados a cada cliente de maneira eficiente. O cliente buscava uma solução que proporcionasse uma visão unificada e acessível de todos os processos judiciais, simplificando a gestão e permitindo uma resposta ágil a cada evento legal. O objetivo era criar um sistema que não apenas organizasse essas informações complexas, mas também facilitasse o acompanhamento contínuo dos eventos judiciários, proporcionando uma experiência mais eficaz e centrada no cliente.',
          es: 'Me enfrenté al desafío de desarrollar un sistema para un cliente que gestionaba miles de clientes, cada uno almacenado en carpetas separadas. Sin embargo, había una necesidad crítica de seguir de manera eficiente los eventos legales relacionados con cada cliente. El cliente buscaba una solución que proporcionara una visión unificada y accesible de todos los procesos legales, simplificando la gestión y permitiendo una respuesta ágil a cada evento legal. El objetivo era crear un sistema que no solo organizara esta información compleja, sino que también facilitara el seguimiento continuo de los eventos legales, proporcionando una experiencia más efectiva y centrada en el cliente.'
        },
        solution: {
          en: 'To address this challenge, I developed a highly interactive system that offers a personalized approach to event types. Now, the client can easily access any legal event related to their thousands of customers previously stored in separate folders. This solution not only unified management, providing a comprehensive and accessible view but also allowed for more intuitive interaction with specific events. The creation of custom event types offers an agile response to legal needs, making monitoring more efficient while simplifying the user experience.',
          pt: 'Para solucionar esse desafio, desenvolvi um sistema altamente interativo que oferece uma abordagem personalizada para tipos de eventos. Agora, o cliente pode ter acesso fácil a qualquer evento judicial relacionado aos seus milhares de clientes previamente armazenados em pastas distintas. Essa solução não apenas unificou a gestão, proporcionando uma visão abrangente e acessível, mas também permitiu uma interação mais intuitiva com eventos específicos. A criação de tipos de eventos personalizados oferece uma resposta ágil às necessidades judiciais, tornando o acompanhamento mais eficiente e, ao mesmo tempo, simplificando a experiência do usuário.',
          es: 'Para abordar este desafío, desarrollé un sistema altamente interactivo que ofrece un enfoque personalizado para los tipos de eventos. Ahora, el cliente puede acceder fácilmente a cualquier evento legal relacionado con sus miles de clientes previamente almacenados en carpetas separadas. Esta solución no solo unificó la gestión, proporcionando una visión completa y accesible, sino que también permitió una interacción más intuitiva con eventos específicos. La creación de tipos de eventos personalizados ofrece una respuesta ágil a las necesidades legales, haciendo que el seguimiento sea más eficiente y, al mismo tiempo, simplificando la experiencia del usuario.',
        }
      }
    },
    home: {
      title: {
        en: 'Hello, I am Letárcio, a full-stack developer.',
        pt: 'Olá, eu sou Letárcio, um desenvolverdor full-stack.',
        es: 'Hola, soy Letárcio, un desarrollador full-stack.',
      },
      desc: {
        en: 'I work meticulously, dedicating careful attention to details in every task.',
        pt: 'Trabalho de maneira minuciosa, dedicando atenção meticulosa aos detalhes em cada tarefa.',
        es: 'Trabajo de manera minuciosa, dedicando atención meticulosa a los detalles en cada tarea.',
      }
    },
    about: {
      desc: {
        en: 'Enthusiastic Full Stack Developer seeking challenges. I have a knack for solving complex problems with meticulous attention to detail. I bring experience in all stages of software development. Committed to quality and open to continuous learning, I aim to contribute to challenging projects, always staying updated with the latest industry trends.',
        pt: 'Desenvolvedor Full Stack entusiasta em busca de desafios. Tenho afinidade em resolver problemas complexos com atenção meticulosa aos detalhes. Trago experiência em todas as etapas do desenvolvimento de software. Comprometido com a qualidade e aberto a aprendizados contínuos, busco contribuir para projetos desafiadores, sempre mantendo-me atualizado com as últimas tendências do setor.',
        es: 'Desarrollador Full Stack entusiasta en busca de desafíos. Tengo afinidad para resolver problemas complejos con atención meticulosa a los detalles. Aporto experiencia en todas las etapas del desarrollo de software. Comprometido con la calidad y abierto a aprendizajes continuos, busco contribuir a proyectos desafiantes, manteniéndome siempre actualizado con las últimas tendencias de la industria.',
      }
    },
    contact: {
      title: {
        en: 'Get in touch',
        pt: 'Entre em contato',
        es: 'Ponte en contacto'
      },
      desc: {
        en: 'Let\'s connect ideas and create something amazing. Reach out and turn your visions into reality!',
        pt: 'Vamos conectar ideias e criar algo incrível. Entre em contato e transforme suas visões em realidade!',
        es: 'Conectemos ideas y creemos algo increíble. ¡Contacta y convierte tus visiones en realidad!',
      },
      email: {
        en: 'Google email',
        pt: 'Email do Google',
        es: 'Correo electrónico de Google'
      },
      number: {
        en: 'Cell phone number',
        pt: 'Número do celular',
        es: 'Número de celular'
      },
    },
    skills_tree: {
      frontend_libs: {
        en: 'Frontend Libraries',
        pt: 'Bibliotecas Frontend',
        es: 'Bibliotecas Frontend',
      },
      backend_libs: {
        en: 'Frameworks & Backend Libraries',
        pt: 'Frameworks & Bibliotecas Backend',
        es: 'Frameworks & Bibliotecas Backend',
      },
      tools: {
        en: 'Development Tools',
        pt: 'Ferramentas de Desenvolvimento',
        es: 'Herramientas de Desarrollo',
      }
    }
  }
})

