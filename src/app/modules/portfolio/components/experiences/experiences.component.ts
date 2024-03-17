import { Component, signal } from '@angular/core';

import { IExperience } from '../../interfaces/experience.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: 'Graduação em Análise e Desenvolvimento de Sistema',
        p: 'SENAI - Joinville - 2019',
      },
      text: 'Formação profissional sólida para planejar, analisar, utilizar e avaliar modernas tecnologias da informação aplicadas em organizações públicas e privadas. Também estando apto a gerira adaptar-se às mudanças provocadas pelas contantes inovações tecnológicas',
    },
    {
      summary: {
        strong: 'MIT em Engenharia de Software com Java',
        p: 'Instituto INFNET - Rio de Janeiro - 2022',
      },
      text: 'Processos, Qualidade e Agilidade em Softwares, Integração continua e DevOps, Desenvolvimento Ágil, Clean Code e Padrões de Projetos, Tecnologia Java e Orientação e Objetos, Java Web e Injeção de Dependências, Arquitetura de Micro Serviços Java',
    },
  ]);
}
