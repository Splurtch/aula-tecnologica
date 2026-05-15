import { ShieldCheck, Move, ArrowRight, Trophy } from 'lucide-react';

export const assessmentData = {
  mixed_quiz: { id: 'mixed_quiz', name: 'Quiz mixto', category: 'Evaluacion', icon: ShieldCheck, color: 'emerald' },
  drag_drop: { id: 'drag_drop', name: 'Arrastrar y clasificar', category: 'Evaluacion', icon: Move, color: 'blue' },
  ordering: { id: 'ordering', name: 'Ordena el proceso', category: 'Evaluacion', icon: ArrowRight, color: 'amber' },
  final_challenge: { id: 'final_challenge', name: 'Reto final', category: 'Evaluacion', icon: Trophy, color: 'purple' },
};

export const assessmentOrderBase = [
  'Crear el documento editable',
  'Guardar con nombre claro',
  'Exportar a formato final',
  'Compartir con el canal adecuado',
];

export const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);