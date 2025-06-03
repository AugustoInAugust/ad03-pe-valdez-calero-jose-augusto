import { ItemStatusEnum } from "../enums/item-status.enum";
import { Item } from "../interfaces/item.interface";

export const MOCK_ITEMS: Item[] = [
  {
    id: '1',
    title: 'Implementar login',
    description: 'Crear el formulario de login con validación y autenticación JWT para la app.',
    status: ItemStatusEnum.FRONTEND,
    creation_date: '2025-05-15T10:30:00Z',
  },
  {
    id: '2',
    title: 'Configurar base de datos',
    description: 'Instalar y configurar PostgreSQL para el backend, realizar migraciones iniciales.',
    status: ItemStatusEnum.BACKEND,
    creation_date: '2025-05-10T09:00:00Z',
    update_date: '2025-05-20T14:15:00Z'
  },
  {
    id: '3',
    title: 'Diseñar landing page',
    description: 'Diseño responsivo con Angular, animaciones sutiles y llamada a la acción clara para usuarios nuevoooooooooooooooooooooooooooooooooooooooos.',
    status: ItemStatusEnum.FULLSTACK,
    creation_date: '2025-05-18T12:45:00Z',
  },
  {
    id: '4',
    title: 'Implementar CI/CD',
    description: 'Configurar pipelines en GitHub Actions para pruebas y despliegues automáticos.',
    status: ItemStatusEnum.DEV_OPS,
    creation_date: '2025-05-12T08:00:00Z',
  },
  {
    id: '5',
    title: 'Automatizar pruebas unitarias',
    description: 'Configurar Jest y Cypress para tests unitarios y end-to-end, con cobertura mínima del 80%.',
    status: ItemStatusEnum.QA,
    creation_date: '2025-05-14T11:30:00Z',
  },
  {
    id: '6',
    title: 'Definir arquitectura de la app',
    description: 'Crear documento de arquitectura que incluya microservicios, comunicación y diagramas de flujo.',
    status: ItemStatusEnum.ARCHITECT,
    creation_date: '2025-05-09T15:20:00Z',
  }
];
