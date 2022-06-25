import { useContext } from 'react';
import { DestinationContext } from '../context/destinationContext';

export function useDestination() {
  const value = useContext(DestinationContext)
  return value;
}
