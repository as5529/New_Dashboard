import { createSlice } from '@reduxjs/toolkit';
import initialData from '../data.json';
import { CloudAccountsChart, RiskAssessmentChart, RegistryScanChart, ImageRiskAssessmentChart, ImageSecurityIssuesChart } from '../components/charts';

// Manually associate chart components with initial widgets from data.json
const enrichedCategories = initialData.categories.map(category => {
  return {
    ...category,
    widgets: category.widgets.map(widget => {
      if (widget.id === 'cloud-accounts') {
        return { ...widget, chartComponent: CloudAccountsChart };
      }
      if (widget.id === 'cloud-account-risk-assessment') {
        return { ...widget, chartComponent: RiskAssessmentChart };
      }
      if (widget.id === 'image-risk-assessment') {
        return { ...widget, chartComponent: ImageRiskAssessmentChart };
      }
      if (widget.id === 'image-security-issues') {
        return { ...widget, chartComponent: ImageSecurityIssuesChart };
      }
      if (widget.id === 'top-5-namespace-specific-alerts') {
        return { ...widget, type: 'text', content: widget.content };
      }
      if (widget.id === 'workload-alerts') {
        return { ...widget, type: 'text', content: widget.content };
      }
      return widget;
    }),
  };
});

const initialState = {
  categories: enrichedCategories,
  availableWidgets: [
    {
      id: 'cloud-accounts',
      name: 'Cloud Accounts',
      type: 'chart',
      chartComponent: CloudAccountsChart
    },
    {
      id: 'cloud-account-risk-assessment',
      name: 'Cloud Account Risk Assessment',
      type: 'chart',
      chartComponent: RiskAssessmentChart
    },
    {
      id: 'image-risk-assessment',
      name: 'Image Risk Assessment',
      type: 'chart',
      chartComponent: ImageRiskAssessmentChart
    },
    {
      id: 'image-security-issues',
      name: 'Image Security Issues',
      type: 'chart',
      chartComponent: ImageSecurityIssuesChart
    },
    {
      id: 'top-5-namespace-specific-alerts',
      name: 'Top 5 Namespace Specific Alerts',
      type: 'text',
      text: 'No Graph data available.'
    },
    {
      id: 'workload-alerts',
      name: 'Workload Alerts',
      type: 'text',
      text: 'No Graph data available.'
    },
  ]
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { widgetId } = action.payload;
      state.categories.forEach(category => {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      });
    }
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;