import { useState, useCallback } from 'react';
import { Product, QuoteItem } from '../types';

export const useQuote = () => {
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const addToQuote = useCallback((product: Product, quantity: number, wantsAdvisory: boolean) => {
    setQuoteItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
          wantsAdvisory: wantsAdvisory || updatedItems[existingItemIndex].wantsAdvisory, // Keep true if already true
        };
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity, wantsAdvisory }];
      }
    });
  }, []);

  const removeFromQuote = useCallback((productId: string) => {
    setQuoteItems(prevItems => prevItems.filter(item => item.id !== productId));
  }, []);

  const updateQuoteItemQuantity = useCallback((productId: string, newQuantity: number) => {
    setQuoteItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  }, []);

  const openQuoteModal = useCallback(() => setIsQuoteModalOpen(true), []);
  const closeQuoteModal = useCallback(() => setIsQuoteModalOpen(false), []);
  const clearQuote = useCallback(() => setQuoteItems([]), []);

  return {
    quoteItems,
    isQuoteModalOpen,
    addToQuote,
    removeFromQuote,
    updateQuoteItemQuantity,
    openQuoteModal,
    closeQuoteModal,
    clearQuote,
  };
};